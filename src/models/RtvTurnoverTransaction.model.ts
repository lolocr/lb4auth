import {Entity, model, property} from '@loopback/repository'

@model({
	name: "rtv_turnover_transaction"
})
export class RtvTurnoverTransaction extends Entity {

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
			columnName: "till_id",
			dataType: "int",
			dataLength: null,
			dataPrecision: 10,
			dataScale: 0,
			nullable: "NO",
		}
	})
	tillId: Number;

	@property({
		type: Number,
		required: true,
		length: null,
		precision: 10,
		scale: 0,
		mssql: {
			columnName: "ubicacio_id",
			dataType: "int",
			dataLength: null,
			dataPrecision: 10,
			dataScale: 0,
			nullable: "NO",
		}
	})
	ubicacioId: Number;

	@property({
		type: Number,
		required: false,
		length: null,
		precision: 10,
		scale: 0,
		mssql: {
			columnName: "cliente_id",
			dataType: "int",
			dataLength: null,
			dataPrecision: 10,
			dataScale: 0,
			nullable: "YES",
		}
	})
	clienteId: Number;

	@property({
		type: Number,
		required: false,
		length: null,
		precision: 9,
		scale: 0,
		mssql: {
			columnName: "trans_num",
			dataType: "numeric",
			dataLength: null,
			dataPrecision: 9,
			dataScale: 0,
			nullable: "YES",
		}
	})
	transNum: Number;

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

	@property({
		type: Number,
		required: true,
		length: null,
		precision: 12,
		scale: 2,
		mssql: {
			columnName: "total_amount",
			dataType: "numeric",
			dataLength: null,
			dataPrecision: 12,
			dataScale: 2,
			nullable: "NO",
		}
	})
	totalAmount: Number;

	@property({
		type: Date,
		required: true,
		length: null,
		precision: null,
		scale: null,
		mssql: {
			columnName: "bookkeeping_date",
			dataType: "datetime",
			dataLength: null,
			dataPrecision: null,
			dataScale: null,
			nullable: "NO",
		}
	})
	bookkeepingDate: Date;

	@property({
		type: Number,
		required: false,
		length: null,
		precision: 10,
		scale: 0,
		mssql: {
			columnName: "pricelevel_id",
			dataType: "int",
			dataLength: null,
			dataPrecision: 10,
			dataScale: 0,
			nullable: "YES",
		}
	})
	pricelevelId: Number;

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
			columnName: "transaction_id",
			dataType: "int",
			dataLength: null,
			dataPrecision: 10,
			dataScale: 0,
			nullable: "YES",
		}
	})
	transactionId: Number;

	@property({
		type: Number,
		required: false,
		length: null,
		precision: 10,
		scale: 0,
		mssql: {
			columnName: "Category",
			dataType: "int",
			dataLength: null,
			dataPrecision: 10,
			dataScale: 0,
			nullable: "YES",
		}
	})
	category: Number;

	@property({
		type: Number,
		required: false,
		length: null,
		precision: 19,
		scale: 0,
		mssql: {
			columnName: "PluNumber",
			dataType: "bigint",
			dataLength: null,
			dataPrecision: 19,
			dataScale: 0,
			nullable: "YES",
		}
	})
	plunumber: Number;

	@property({
		type: Number,
		required: false,
		length: null,
		precision: 19,
		scale: 0,
		mssql: {
			columnName: "EanCode",
			dataType: "bigint",
			dataLength: null,
			dataPrecision: 19,
			dataScale: 0,
			nullable: "YES",
		}
	})
	eancode: Number;

	@property({
		type: Number,
		required: false,
		length: null,
		precision: 10,
		scale: 0,
		mssql: {
			columnName: "Vat",
			dataType: "decimal",
			dataLength: null,
			dataPrecision: 10,
			dataScale: 0,
			nullable: "YES",
		}
	})
	vat: Number;

	@property({
		type: String,
		required: false,
		length: 30,
		precision: null,
		scale: null,
		mssql: {
			columnName: "Type",
			dataType: "varchar",
			dataLength: 30,
			dataPrecision: null,
			dataScale: null,
			nullable: "YES",
		}
	})
	type: String;

	@property({
		type: Number,
		required: false,
		length: null,
		precision: 10,
		scale: 0,
		mssql: {
			columnName: "DivaDcs",
			dataType: "int",
			dataLength: null,
			dataPrecision: 10,
			dataScale: 0,
			nullable: "YES",
		}
	})
	divadcs: Number;

	@property({
		type: Number,
		required: false,
		length: null,
		precision: 19,
		scale: 0,
		mssql: {
			columnName: "TransactionCounter",
			dataType: "bigint",
			dataLength: null,
			dataPrecision: 19,
			dataScale: 0,
			nullable: "YES",
		}
	})
	transactioncounter: Number;

	@property({
		type: String,
		required: false,
		length: 30,
		precision: null,
		scale: null,
		mssql: {
			columnName: "mode",
			dataType: "varchar",
			dataLength: 30,
			dataPrecision: null,
			dataScale: null,
			nullable: "YES",
		}
	})
	mode: String;

	@property({
		type: Number,
		required: false,
		length: null,
		precision: 10,
		scale: 0,
		mssql: {
			columnName: "Operador_id",
			dataType: "int",
			dataLength: null,
			dataPrecision: 10,
			dataScale: 0,
			nullable: "YES",
		}
	})
	operadorId: Number;

	constructor(data?: Partial<RtvTurnoverTransaction>) {
		super(data);
	}
}