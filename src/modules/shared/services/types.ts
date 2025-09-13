export interface IResponse<T> {
  data: T
  metadata: {
    limit: number
    page: number
    timestamp: number
    total: number
    totalPage: number
  }
}
