import {Entity, model, property} from '@loopback/repository'

@model({
	name: "Subsidy"
})
export class Subsidy extends Entity {

	@property({
		type: Number,
		required: true,
		length: null,
		precision: 10,
		scale: 0,
		id: true,
		mssql: {
			columnName: "Subsidy_id",
			dataType: "int",
			dataLength: null,
			dataPrecision: 10,
			dataScale: 0,
			nullable: "NO",
		}
	})
	subsidyId: Number;

	@property({
		type: String,
		required: false,
		length: 255,
		precision: null,
		scale: null,
		mssql: {
			columnName: "Code",
			dataType: "varchar",
			dataLength: 255,
			dataPrecision: null,
			dataScale: null,
			nullable: "YES",
		}
	})
	code: String;

	@property({
		type: String,
		required: false,
		length: 255,
		precision: null,
		scale: null,
		mssql: {
			columnName: "Descripcion",
			dataType: "varchar",
			dataLength: 255,
			dataPrecision: null,
			dataScale: null,
			nullable: "YES",
		}
	})
	descripcion: String;

	@property({
		type: Number,
		required: true,
		length: null,
		precision: 10,
		scale: 0,
		mssql: {
			columnName: "Is_valid",
			dataType: "int",
			dataLength: null,
			dataPrecision: 10,
			dataScale: 0,
			nullable: "NO",
		}
	})
	isValid: Number;

	constructor(data?: Partial<Subsidy>) {
		super(data);
	}
}