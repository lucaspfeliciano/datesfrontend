import { AuthService } from './AuthService'
import { UsersService } from './UsersService'
import { PostsService } from './PostsService'
import { RolesService } from './RolesService'
import { TeamsService } from './TeamsService'

export const authService = new AuthService('https://123x2vpqec.execute-api.us-east-1.amazonaws.com/dev')
export const usersService = new UsersService('https://123x2vpqec.execute-api.us-east-1.amazonaws.com/dev')
export const postsService = new PostsService('https://123x2vpqec.execute-api.us-east-1.amazonaws.com/dev')
export const rolesService = new RolesService('https://123x2vpqec.execute-api.us-east-1.amazonaws.com/dev')
export const teamsService = new TeamsService('https://123x2vpqec.execute-api.us-east-1.amazonaws.com/dev')
