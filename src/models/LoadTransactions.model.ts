import {Entity, model, property} from '@loopback/repository'

@model({
	name: "load_transactions"
})
export class LoadTransactions extends Entity {

	@property({
		type: Number,
		required: true,
		length: null,
		precision: 10,
		scale: 0,
		id: true,
		mssql: {
			columnName: "ID",
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

	@property({
		type: Number,
		required: false,
		length: null,
		precision: 10,
		scale: 0,
		mssql: {
			columnName: "saldo",
			dataType: "numeric",
			dataLength: null,
			dataPrecision: 10,
			dataScale: 0,
			nullable: "YES",
		}
	})
	saldo: Number;

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
		type: Date,
		required: true,
		length: null,
		precision: null,
		scale: null,
		mssql: {
			columnName: "trans_date",
			dataType: "datetime",
			dataLength: null,
			dataPrecision: null,
			dataScale: null,
			nullable: "NO",
		}
	})
	transDate: Date;

	constructor(data?: Partial<LoadTransactions>) {
		super(data);
	}
}