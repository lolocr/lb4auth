import {Entity, model, property} from '@loopback/repository'

@model({
	name: "vat"
})
export class Vat extends Entity {

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
		required: false,
		length: 40,
		precision: null,
		scale: null,
		mssql: {
			columnName: "description",
			dataType: "varchar",
			dataLength: 40,
			dataPrecision: null,
			dataScale: null,
			nullable: "YES",
		}
	})
	description: String;

	@property({
		type: Number,
		required: true,
		length: null,
		precision: 4,
		scale: 2,
		mssql: {
			columnName: "vat_percent",
			dataType: "numeric",
			dataLength: null,
			dataPrecision: 4,
			dataScale: 2,
			nullable: "NO",
		}
	})
	vatPercent: Number;

	@property({
		type: String,
		required: false,
		length: 255,
		precision: null,
		scale: null,
		mssql: {
			columnName: "notes",
			dataType: "varchar",
			dataLength: 255,
			dataPrecision: null,
			dataScale: null,
			nullable: "YES",
		}
	})
	notes: String;

	@property({
		type: Number,
		required: false,
		length: null,
		precision: 5,
		scale: 3,
		mssql: {
			columnName: "tax_rebate_percent",
			dataType: "numeric",
			dataLength: null,
			dataPrecision: 5,
			dataScale: 3,
			nullable: "YES",
		}
	})
	taxRebatePercent: Number;

	@property({
		type: Number,
		required: false,
		length: null,
		precision: 5,
		scale: 3,
		mssql: {
			columnName: "tax_rebate_threshold",
			dataType: "numeric",
			dataLength: null,
			dataPrecision: 5,
			dataScale: 3,
			nullable: "YES",
		}
	})
	taxRebateThreshold: Number;

	constructor(data?: Partial<Vat>) {
		super(data);
	}
}