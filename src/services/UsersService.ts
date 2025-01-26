import axios, { type AxiosInstance } from 'axios'
import { type User } from '@/types/User'
import { getAuthorizationHeader } from '@/utils/getAuthorizationHeader'
import { type Team } from '@/types/Team'
import { type Company } from '@/types/Company'
import { type Role } from '@/types/Role'

interface ICreateUser {
  name: string
  email: string
  roleId: string
  teamId: string
  leaderId: string
  hiringDate: string
  permissions: string[]
}

interface IGetUser {
  user: User
  team: Team
  company: Company
  role: Role
}

export class UsersService {
  protected readonly instance: AxiosInstance
  public constructor (url: string) {
    this.instance = axios.create({
      baseURL: url,
      timeout: 30000,
      timeoutErrorMessage: 'Time out!'
    })
  }

  createUser = async ({ name, email, roleId, teamId, leaderId, hiringDate, permissions }: ICreateUser): Promise<User> => {
    const response = await this.instance.post('/users', {
      email,
      name,
      roleId,
      teamId,
      leaderId,
      hiringDate,
      permissions
    }, {
      headers: getAuthorizationHeader()
    })

    return response.data
  }

  listUsers = async (): Promise<User[]> => {
    const response = await this.instance
      .get('/users', {
        headers: getAuthorizationHeader()
      })

    return response.data
  }

  listNewHiries = async (): Promise<User[]> => {
    const response = await this.instance
      .get('/users/new-hiries', {
        headers: getAuthorizationHeader()
      })

    return response.data
  }

  listChart = async (): Promise<User[]> => {
    const response = await this.instance
      .get('/users/chart', {
        headers: getAuthorizationHeader()
      })

    return response.data
  }

  getUser = async (id: string): Promise<IGetUser> => {
    const response = await this.instance
      .get(`/users/${id}`, {
        headers: getAuthorizationHeader()
      })

    return response.data
  }

  getMe = async (): Promise<IGetUser> => {
    const response = await this.instance
      .get('/users/me', {
        headers: getAuthorizationHeader()
      })

    return response.data
  }

  updateUser = async (userId: string, user: User) => {
    const response = await this.instance
      .post(`/users/${userId}`, user, {
        headers: getAuthorizationHeader()
      })

    return response.data
  }

  updateMe = async (data: User) => {
    const response = await this.instance
      .post('/users', data, {
        headers: getAuthorizationHeader()
      })

    return response.data
  }

  uploadAvatar = async (formData: FormData): Promise<{ link: string, localLink: string }> => {
    const response = await this.instance
      .post('/users/image', formData, {
        headers: {
          ...getAuthorizationHeader(),
          'Content-Type': 'multipart/form-data'
        }
      })

    return response.data
  }
}
