export interface Task {
  id: number,
  description: string,
  category: string,
  date: string,
  done: boolean
}

export interface Category {
  id: number,
  description: string
}