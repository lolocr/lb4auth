import {Entity, model, property} from '@loopback/repository'

@model({
	name: "Voucher"
})
export class Voucher extends Entity {

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
		required: true,
		length: 6,
		precision: null,
		scale: null,
		mssql: {
			columnName: "Voucher",
			dataType: "varchar",
			dataLength: 6,
			dataPrecision: null,
			dataScale: null,
			nullable: "NO",
		}
	})
	voucher: String;

	@property({
		type: Number,
		required: true,
		length: null,
		precision: 10,
		scale: 0,
		mssql: {
			columnName: "MaquinaCreacio",
			dataType: "numeric",
			dataLength: null,
			dataPrecision: 10,
			dataScale: 0,
			nullable: "NO",
		}
	})
	maquinacreacio: Number;

	@property({
		type: Number,
		required: true,
		length: null,
		precision: 10,
		scale: 0,
		mssql: {
			columnName: "MaquinaReedem",
			dataType: "numeric",
			dataLength: null,
			dataPrecision: 10,
			dataScale: 0,
			nullable: "NO",
		}
	})
	maquinareedem: Number;

	@property({
		type: Number,
		required: true,
		length: null,
		precision: 10,
		scale: 0,
		mssql: {
			columnName: "used",
			dataType: "int",
			dataLength: null,
			dataPrecision: 10,
			dataScale: 0,
			nullable: "NO",
		}
	})
	used: Number;

	@property({
		type: Date,
		required: false,
		length: null,
		precision: null,
		scale: null,
		mssql: {
			columnName: "date_creation",
			dataType: "datetime",
			dataLength: null,
			dataPrecision: null,
			dataScale: null,
			nullable: "YES",
		}
	})
	dateCreation: Date;

	@property({
		type: Date,
		required: false,
		length: null,
		precision: null,
		scale: null,
		mssql: {
			columnName: "date_reedem",
			dataType: "datetime",
			dataLength: null,
			dataPrecision: null,
			dataScale: null,
			nullable: "YES",
		}
	})
	dateReedem: Date;

	@property({
		type: Number,
		required: false,
		length: null,
		precision: 10,
		scale: 0,
		mssql: {
			columnName: "N_C",
			dataType: "int",
			dataLength: null,
			dataPrecision: 10,
			dataScale: 0,
			nullable: "YES",
		}
	})
	nC: Number;

	@property({
		type: Number,
		required: false,
		length: null,
		precision: 10,
		scale: 0,
		mssql: {
			columnName: "article_id",
			dataType: "int",
			dataLength: null,
			dataPrecision: 10,
			dataScale: 0,
			nullable: "YES",
		}
	})
	articleId: Number;

	@property({
		type: String,
		required: false,
		length: 20,
		precision: null,
		scale: null,
		mssql: {
			columnName: "article_code",
			dataType: "varchar",
			dataLength: 20,
			dataPrecision: null,
			dataScale: null,
			nullable: "YES",
		}
	})
	articleCode: String;

	@property({
		type: String,
		required: false,
		length: 20,
		precision: null,
		scale: null,
		mssql: {
			columnName: "currency",
			dataType: "varchar",
			dataLength: 20,
			dataPrecision: null,
			dataScale: null,
			nullable: "YES",
		}
	})
	currency: String;

	@property({
		type: String,
		required: false,
		length: 40,
		precision: null,
		scale: null,
		mssql: {
			columnName: "email",
			dataType: "varchar",
			dataLength: 40,
			dataPrecision: null,
			dataScale: null,
			nullable: "YES",
		}
	})
	email: String;

	@property({
		type: Number,
		required: false,
		length: null,
		precision: 10,
		scale: 0,
		mssql: {
			columnName: "MessageId",
			dataType: "int",
			dataLength: null,
			dataPrecision: 10,
			dataScale: 0,
			nullable: "YES",
		}
	})
	messageid: Number;

	@property({
		type: String,
		required: false,
		length: 20,
		precision: null,
		scale: null,
		mssql: {
			columnName: "PhoneNumber",
			dataType: "varchar",
			dataLength: 20,
			dataPrecision: null,
			dataScale: null,
			nullable: "YES",
		}
	})
	phonenumber: String;

	@property({
		type: Number,
		required: false,
		length: null,
		precision: 10,
		scale: 2,
		mssql: {
			columnName: "PreuPagat",
			dataType: "numeric",
			dataLength: null,
			dataPrecision: 10,
			dataScale: 2,
			nullable: "YES",
		}
	})
	preupagat: Number;

	constructor(data?: Partial<Voucher>) {
		super(data);
	}
}