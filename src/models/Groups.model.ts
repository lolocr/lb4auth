import {Entity, model, property} from '@loopback/repository'

@model({
	name: "groups"
})
export class Groups extends Entity {

	@property({
		type: Number,
		required: true,
		length: null,
		precision: 10,
		scale: 0,
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
		required: true,
		length: null,
		precision: 8,
		scale: 0,
		mssql: {
			columnName: "code",
			dataType: "numeric",
			dataLength: null,
			dataPrecision: 8,
			dataScale: 0,
			nullable: "NO",
		}
	})
	code: Number;

	@property({
		type: String,
		required: true,
		length: 40,
		precision: null,
		scale: null,
		mssql: {
			columnName: "description",
			dataType: "varchar",
			dataLength: 40,
			dataPrecision: null,
			dataScale: null,
			nullable: "NO",
		}
	})
	description: String;

	@property({
		type: String,
		required: false,
		length: 40,
		precision: null,
		scale: null,
		mssql: {
			columnName: "notes1",
			dataType: "varchar",
			dataLength: 40,
			dataPrecision: null,
			dataScale: null,
			nullable: "YES",
		}
	})
	notes1: String;

	@property({
		type: String,
		required: false,
		length: 40,
		precision: null,
		scale: null,
		mssql: {
			columnName: "notes2",
			dataType: "varchar",
			dataLength: 40,
			dataPrecision: null,
			dataScale: null,
			nullable: "YES",
		}
	})
	notes2: String;

	@property({
		type: String,
		required: false,
		length: 40,
		precision: null,
		scale: null,
		mssql: {
			columnName: "notes3",
			dataType: "varchar",
			dataLength: 40,
			dataPrecision: null,
			dataScale: null,
			nullable: "YES",
		}
	})
	notes3: String;

	@property({
		type: Number,
		required: false,
		length: null,
		precision: 10,
		scale: 0,
		mssql: {
			columnName: "Grupo_id",
			dataType: "int",
			dataLength: null,
			dataPrecision: 10,
			dataScale: 0,
			nullable: "YES",
		}
	})
	grupoId: Number;

	@property({
		type: Number,
		required: false,
		length: null,
		precision: 2,
		scale: 0,
		mssql: {
			columnName: "minimum_customer_age",
			dataType: "numeric",
			dataLength: null,
			dataPrecision: 2,
			dataScale: 0,
			nullable: "YES",
		}
	})
	minimumCustomerAge: Number;

	@property({
		type: Number,
		required: true,
		length: null,
		precision: 1,
		scale: 0,
		mssql: {
			columnName: "tax_type",
			dataType: "numeric",
			dataLength: null,
			dataPrecision: 1,
			dataScale: 0,
			nullable: "NO",
		}
	})
	taxType: Number;

	@property({
		type: Number,
		required: false,
		length: null,
		precision: 10,
		scale: 0,
		mssql: {
			columnName: "Empresa_id",
			dataType: "int",
			dataLength: null,
			dataPrecision: 10,
			dataScale: 0,
			nullable: "YES",
		}
	})
	empresaId: Number;

	constructor(data?: Partial<Groups>) {
		super(data);
	}
}