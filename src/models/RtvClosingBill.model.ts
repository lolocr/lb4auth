import {Entity, model, property} from '@loopback/repository'

@model({
	name: "rtv_closing_bill"
})
export class RtvClosingBill extends Entity {

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
		required: true,
		length: null,
		precision: 10,
		scale: 0,
		mssql: {
			columnName: "closing_id",
			dataType: "int",
			dataLength: null,
			dataPrecision: 10,
			dataScale: 0,
			nullable: "NO",
		}
	})
	closingId: Number;

	@property({
		type: Number,
		required: false,
		length: null,
		precision: 10,
		scale: 0,
		mssql: {
			columnName: "till_code",
			dataType: "int",
			dataLength: null,
			dataPrecision: 10,
			dataScale: 0,
			nullable: "YES",
		}
	})
	tillCode: Number;

	@property({
		type: Number,
		required: false,
		length: null,
		precision: 30,
		scale: 0,
		mssql: {
			columnName: "ValueOfBill",
			dataType: "decimal",
			dataLength: null,
			dataPrecision: 30,
			dataScale: 0,
			nullable: "YES",
		}
	})
	valueofbill: Number;

	@property({
		type: Number,
		required: false,
		length: null,
		precision: 19,
		scale: 0,
		mssql: {
			columnName: "BillQty",
			dataType: "bigint",
			dataLength: null,
			dataPrecision: 19,
			dataScale: 0,
			nullable: "YES",
		}
	})
	billqty: Number;

	constructor(data?: Partial<RtvClosingBill>) {
		super(data);
	}
}