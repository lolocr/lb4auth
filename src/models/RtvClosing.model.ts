import {Entity, model, property} from '@loopback/repository'

@model({
	name: "rtv_closing"
})
export class RtvClosing extends Entity {

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
		type: Date,
		required: false,
		length: null,
		precision: null,
		scale: null,
		mssql: {
			columnName: "opening_date",
			dataType: "datetime",
			dataLength: null,
			dataPrecision: null,
			dataScale: null,
			nullable: "YES",
		}
	})
	openingDate: Date;

	@property({
		type: Date,
		required: false,
		length: null,
		precision: null,
		scale: null,
		mssql: {
			columnName: "closing_date",
			dataType: "datetime",
			dataLength: null,
			dataPrecision: null,
			dataScale: null,
			nullable: "YES",
		}
	})
	closingDate: Date;

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
		precision: 10,
		scale: 0,
		mssql: {
			columnName: "closing_num",
			dataType: "int",
			dataLength: null,
			dataPrecision: 10,
			dataScale: 0,
			nullable: "YES",
		}
	})
	closingNum: Number;

	@property({
		type: Number,
		required: false,
		length: null,
		precision: 30,
		scale: 0,
		mssql: {
			columnName: "ValueOfCoinIn",
			dataType: "decimal",
			dataLength: null,
			dataPrecision: 30,
			dataScale: 0,
			nullable: "YES",
		}
	})
	valueofcoinin: Number;

	@property({
		type: Number,
		required: false,
		length: null,
		precision: 30,
		scale: 0,
		mssql: {
			columnName: "ValueOfBillsIn",
			dataType: "decimal",
			dataLength: null,
			dataPrecision: 30,
			dataScale: 0,
			nullable: "YES",
		}
	})
	valueofbillsin: Number;

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

	@property({
		type: String,
		required: false,
		length: 20,
		precision: null,
		scale: null,
		mssql: {
			columnName: "Mode",
			dataType: "varchar",
			dataLength: 20,
			dataPrecision: null,
			dataScale: null,
			nullable: "YES",
		}
	})
	mode: String;

	@property({
		type: String,
		required: false,
		length: 30,
		precision: null,
		scale: null,
		mssql: {
			columnName: "card_num",
			dataType: "varchar",
			dataLength: 30,
			dataPrecision: null,
			dataScale: null,
			nullable: "YES",
		}
	})
	cardNum: String;

	constructor(data?: Partial<RtvClosing>) {
		super(data);
	}
}