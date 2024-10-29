/**
* This file was @generated using pocketbase-typegen
*/

import type PocketBase from 'pocketbase'
import type { RecordService } from 'pocketbase'

export enum Collections {
	House = "house",
	Lease = "lease",
	Roommate = "roommate",
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

export type HouseRecord = {
	address?: string
	community_name?: string
}

export type LeaseRecord = {
	active?: boolean
	end_date?: IsoDateString
	house?: RecordIdString
	monthly_price?: number
	start_date?: IsoDateString
	tenant?: RecordIdString
}

export type RoommateRecord = {
	email?: string
	first_name?: string
	last_name?: string
	lease?: RecordIdString[]
	phone_number?: number
}

export type UsersRecord = {
	avatar?: string
	name?: string
}

// Response types include system fields and match responses from the PocketBase API
export type HouseResponse<Texpand = unknown> = Required<HouseRecord> & BaseSystemFields<Texpand>
export type LeaseResponse<Texpand = unknown> = Required<LeaseRecord> & BaseSystemFields<Texpand>
export type RoommateResponse<Texpand = unknown> = Required<RoommateRecord> & BaseSystemFields<Texpand>
export type UsersResponse<Texpand = unknown> = Required<UsersRecord> & AuthSystemFields<Texpand>

// Types containing all Records and Responses, useful for creating typing helper functions

export type CollectionRecords = {
	house: HouseRecord
	lease: LeaseRecord
	roommate: RoommateRecord
	users: UsersRecord
}

export type CollectionResponses = {
	house: HouseResponse
	lease: LeaseResponse
	roommate: RoommateResponse
	users: UsersResponse
}

// Type for usage with type asserted PocketBase instance
// https://github.com/pocketbase/js-sdk#specify-typescript-definitions

export type TypedPocketBase = PocketBase & {
	collection(idOrName: 'house'): RecordService<HouseResponse>
	collection(idOrName: 'lease'): RecordService<LeaseResponse>
	collection(idOrName: 'roommate'): RecordService<RoommateResponse>
	collection(idOrName: 'users'): RecordService<UsersResponse>
}
