/**
* This file was @generated using pocketbase-typegen
*/

export enum Collections {
	Files = "files",
	Pages = "pages",
	Users = "users",
}

// Alias types for improved usability
export type IsoDateString = string
export type RecordIdString = string
export type HTMLString = string

// System fields
export type BaseSystemFields<T = never> = {
	id: RecordIdString
	created: IsoDateString
	updated: IsoDateString
	collectionId: string
	collectionName: Collections
	expand?: T
}

export type AuthSystemFields<T = never> = {
	email: string
	emailVisibility: boolean
	username: string
	verified: boolean
} & BaseSystemFields<T>

// Record types for each collection

export type FilesRecord = {
	file: string
}

export type PagesRecord<Tcontent = unknown> = {
	content?: null | Tcontent
	title?: string
	slug?: string
}

export type UsersRecord = {
	lastname?: string
	firstname?: string
	avatar?: string
}

// Response types include system fields and match responses from the PocketBase API
export type FilesResponse = Required<FilesRecord> & BaseSystemFields
export type PagesResponse<Tcontent = unknown> = Required<PagesRecord<Tcontent>> & BaseSystemFields
export type UsersResponse = Required<UsersRecord> & AuthSystemFields

// Types containing all Records and Responses, useful for creating typing helper functions

export type CollectionRecords = {
	files: FilesRecord
	pages: PagesRecord
	users: UsersRecord
}

export type CollectionResponses = {
	files: FilesResponse
	pages: PagesResponse
	users: UsersResponse
}