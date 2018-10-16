import {Entity, model, property} from '@loopback/repository'

@model({
	name: "role_permissions"
})
export class RolePermissions extends Entity {

	@property({
		type: Number,
		required: true,
		length: null,
		precision: 10,
		scale: 0,
		id: true,
		mssql: {
			columnName: "id",
			dataType: "int",
			dataLength: null,
			dataPrecision: 10,
			dataScale: 0,
			nullable: "NO",
		}
	})
	id: Number;

	@property({
		type: Number,
		required: false,
		length: null,
		precision: 10,
		scale: 0,
		mssql: {
			columnName: "id_role",
			dataType: "int",
			dataLength: null,
			dataPrecision: 10,
			dataScale: 0,
			nullable: "YES",
		}
	})
	idRole: Number;

	@property({
		type: Number,
		required: false,
		length: null,
		precision: 10,
		scale: 0,
		mssql: {
			columnName: "id_permission",
			dataType: "int",
			dataLength: null,
			dataPrecision: 10,
			dataScale: 0,
			nullable: "YES",
		}
	})
	idPermission: Number;

	@property({
		type: Number,
		required: false,
		length: null,
		precision: 3,
		scale: 0,
		mssql: {
			columnName: "allowed",
			dataType: "tinyint",
			dataLength: null,
			dataPrecision: 3,
			dataScale: 0,
			nullable: "YES",
		}
	})
	allowed: Number;

	constructor(data?: Partial<RolePermissions>) {
		super(data);
	}
}