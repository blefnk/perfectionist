import type { TSESTree } from '@typescript-eslint/types'

export enum SortType {
  'alphabetical' = 'alphabetical',
  'line-length' = 'line-length',
  'natural' = 'natural',
}

export enum SortOrder {
  'desc' = 'desc',
  'asc' = 'asc',
}

export type PartitionComment = string[] | boolean | string

export interface SortingNode {
  hasMultipleImportDeclarations?: boolean
  dependencies?: string[]
  node: TSESTree.Node
  group?: string
  name: string
  size: number
}
