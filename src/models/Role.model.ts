import {Entity, model, property} from '@loopback/repository'

@model({
	name: "role"
})
export class Role extends Entity {

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
		type: String,
		required: false,
		length: 45,
		precision: null,
		scale: null,
		mssql: {
			columnName: "nom",
			dataType: "varchar",
			dataLength: 45,
			dataPrecision: null,
			dataScale: null,
			nullable: "YES",
		}
	})
	nom: String;

	constructor(data?: Partial<Role>) {
		super(data);
	}
}