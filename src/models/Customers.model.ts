import {Entity, model, property} from '@loopback/repository'

@model({
	name: "customers"
})
export class Customers extends Entity {

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
		length: 30,
		precision: null,
		scale: null,
		mssql: {
			columnName: "code",
			dataType: "varchar",
			dataLength: 30,
			dataPrecision: null,
			dataScale: null,
			nullable: "YES",
		}
	})
	code: String;

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
		type: Number,
		required: true,
		length: null,
		precision: 1,
		scale: 0,
		mssql: {
			columnName: "is_valid",
			dataType: "numeric",
			dataLength: null,
			dataPrecision: 1,
			dataScale: 0,
			nullable: "NO",
		}
	})
	isValid: Number;

	@property({
		type: Number,
		required: false,
		length: null,
		precision: 10,
		scale: 2,
		mssql: {
			columnName: "Subsidy1",
			dataType: "numeric",
			dataLength: null,
			dataPrecision: 10,
			dataScale: 2,
			nullable: "YES",
		}
	})
	subsidy1: Number;

	@property({
		type: Number,
		required: true,
		length: null,
		precision: 10,
		scale: 2,
		mssql: {
			columnName: "prepay_balance_cash",
			dataType: "numeric",
			dataLength: null,
			dataPrecision: 10,
			dataScale: 2,
			nullable: "NO",
		}
	})
	prepayBalanceCash: Number;

	@property({
		type: Number,
		required: true,
		length: null,
		precision: 10,
		scale: 2,
		mssql: {
			columnName: "online_balance",
			dataType: "numeric",
			dataLength: null,
			dataPrecision: 10,
			dataScale: 2,
			nullable: "NO",
		}
	})
	onlineBalance: Number;

	@property({
		type: Number,
		required: true,
		length: null,
		precision: 10,
		scale: 2,
		mssql: {
			columnName: "webload",
			dataType: "numeric",
			dataLength: null,
			dataPrecision: 10,
			dataScale: 2,
			nullable: "NO",
		}
	})
	webload: Number;

	@property({
		type: Number,
		required: true,
		length: null,
		precision: 10,
		scale: 2,
		mssql: {
			columnName: "credit_balance",
			dataType: "numeric",
			dataLength: null,
			dataPrecision: 10,
			dataScale: 2,
			nullable: "NO",
		}
	})
	creditBalance: Number;

	@property({
		type: Number,
		required: false,
		length: null,
		precision: 10,
		scale: 2,
		mssql: {
			columnName: "Subsidy2",
			dataType: "numeric",
			dataLength: null,
			dataPrecision: 10,
			dataScale: 2,
			nullable: "YES",
		}
	})
	subsidy2: Number;

	@property({
		type: Number,
		required: false,
		length: null,
		precision: 10,
		scale: 0,
		mssql: {
			columnName: "Subsidy_id",
			dataType: "int",
			dataLength: null,
			dataPrecision: 10,
			dataScale: 0,
			nullable: "YES",
		}
	})
	subsidyId: Number;

	@property({
		type: Number,
		required: true,
		length: null,
		precision: 1,
		scale: 0,
		mssql: {
			columnName: "balance_on_card",
			dataType: "numeric",
			dataLength: null,
			dataPrecision: 1,
			dataScale: 0,
			nullable: "NO",
		}
	})
	balanceOnCard: Number;

	@property({
		type: Number,
		required: false,
		length: null,
		precision: 10,
		scale: 0,
		mssql: {
			columnName: "ventas_gratuitas",
			dataType: "int",
			dataLength: null,
			dataPrecision: 10,
			dataScale: 0,
			nullable: "YES",
		}
	})
	ventasGratuitas: Number;

	@property({
		type: String,
		required: false,
		length: 40,
		precision: null,
		scale: null,
		mssql: {
			columnName: "street",
			dataType: "varchar",
			dataLength: 40,
			dataPrecision: null,
			dataScale: null,
			nullable: "YES",
		}
	})
	street: String;

	@property({
		type: String,
		required: false,
		length: 10,
		precision: null,
		scale: null,
		mssql: {
			columnName: "zip_code",
			dataType: "varchar",
			dataLength: 10,
			dataPrecision: null,
			dataScale: null,
			nullable: "YES",
		}
	})
	zipCode: String;

	@property({
		type: String,
		required: false,
		length: 40,
		precision: null,
		scale: null,
		mssql: {
			columnName: "city",
			dataType: "varchar",
			dataLength: 40,
			dataPrecision: null,
			dataScale: null,
			nullable: "YES",
		}
	})
	city: String;

	@property({
		type: String,
		required: false,
		length: 3,
		precision: null,
		scale: null,
		mssql: {
			columnName: "country",
			dataType: "varchar",
			dataLength: 3,
			dataPrecision: null,
			dataScale: null,
			nullable: "YES",
		}
	})
	country: String;

	@property({
		type: String,
		required: false,
		length: 20,
		precision: null,
		scale: null,
		mssql: {
			columnName: "phone",
			dataType: "varchar",
			dataLength: 20,
			dataPrecision: null,
			dataScale: null,
			nullable: "YES",
		}
	})
	phone: String;

	@property({
		type: String,
		required: false,
		length: 20,
		precision: null,
		scale: null,
		mssql: {
			columnName: "fax",
			dataType: "varchar",
			dataLength: 20,
			dataPrecision: null,
			dataScale: null,
			nullable: "YES",
		}
	})
	fax: String;

	@property({
		type: Date,
		required: false,
		length: null,
		precision: null,
		scale: null,
		mssql: {
			columnName: "anniversary",
			dataType: "datetime",
			dataLength: null,
			dataPrecision: null,
			dataScale: null,
			nullable: "YES",
		}
	})
	anniversary: Date;

	@property({
		type: String,
		required: false,
		length: 11,
		precision: null,
		scale: null,
		mssql: {
			columnName: "category",
			dataType: "varchar",
			dataLength: 11,
			dataPrecision: null,
			dataScale: null,
			nullable: "YES",
		}
	})
	category: String;

	@property({
		type: String,
		required: false,
		length: 100,
		precision: null,
		scale: null,
		mssql: {
			columnName: "email",
			dataType: "varchar",
			dataLength: 100,
			dataPrecision: null,
			dataScale: null,
			nullable: "YES",
		}
	})
	email: String;

	@property({
		type: String,
		required: false,
		length: 40,
		precision: null,
		scale: null,
		mssql: {
			columnName: "operador",
			dataType: "varchar",
			dataLength: 40,
			dataPrecision: null,
			dataScale: null,
			nullable: "YES",
		}
	})
	operador: String;

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
		required: true,
		length: null,
		precision: 10,
		scale: 0,
		mssql: {
			columnName: "VC_EMPRESA",
			dataType: "int",
			dataLength: null,
			dataPrecision: 10,
			dataScale: 0,
			nullable: "NO",
		}
	})
	vcEmpresa: Number;

	@property({
		type: Number,
		required: true,
		length: null,
		precision: 10,
		scale: 0,
		mssql: {
			columnName: "VC_OPERADOR",
			dataType: "int",
			dataLength: null,
			dataPrecision: 10,
			dataScale: 0,
			nullable: "NO",
		}
	})
	vcOperador: Number;

	@property({
		type: Number,
		required: true,
		length: null,
		precision: 10,
		scale: 0,
		mssql: {
			columnName: "VC_GRUPO",
			dataType: "int",
			dataLength: null,
			dataPrecision: 10,
			dataScale: 0,
			nullable: "NO",
		}
	})
	vcGrupo: Number;

	@property({
		type: Number,
		required: true,
		length: null,
		precision: 10,
		scale: 0,
		mssql: {
			columnName: "VC_CLIENTE",
			dataType: "int",
			dataLength: null,
			dataPrecision: 10,
			dataScale: 0,
			nullable: "NO",
		}
	})
	vcCliente: Number;

	@property({
		type: Number,
		required: true,
		length: null,
		precision: 10,
		scale: 0,
		mssql: {
			columnName: "VC_UBICACIO",
			dataType: "int",
			dataLength: null,
			dataPrecision: 10,
			dataScale: 0,
			nullable: "NO",
		}
	})
	vcUbicacio: Number;

	@property({
		type: Number,
		required: true,
		length: null,
		precision: 10,
		scale: 0,
		mssql: {
			columnName: "VC_TILL",
			dataType: "int",
			dataLength: null,
			dataPrecision: 10,
			dataScale: 0,
			nullable: "NO",
		}
	})
	vcTill: Number;

	@property({
		type: Number,
		required: true,
		length: null,
		precision: 10,
		scale: 0,
		mssql: {
			columnName: "VC_GRUP_CLIENTS",
			dataType: "int",
			dataLength: null,
			dataPrecision: 10,
			dataScale: 0,
			nullable: "NO",
		}
	})
	vcGrupClients: Number;

	@property({
		type: Number,
		required: true,
		length: null,
		precision: 10,
		scale: 0,
		mssql: {
			columnName: "descompte",
			dataType: "int",
			dataLength: null,
			dataPrecision: 10,
			dataScale: 0,
			nullable: "NO",
		}
	})
	descompte: Number;

	@property({
		type: Number,
		required: true,
		length: null,
		precision: 10,
		scale: 2,
		mssql: {
			columnName: "descompte_amount",
			dataType: "numeric",
			dataLength: null,
			dataPrecision: 10,
			dataScale: 2,
			nullable: "NO",
		}
	})
	descompteAmount: Number;

	constructor(data?: Partial<Customers>) {
		super(data);
	}
}