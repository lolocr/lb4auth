import {Entity, model, property} from '@loopback/repository'

@model({
	name: "v2vbasic"
})
export class V2vbasic extends Entity {

	@property({
		type: String,
		required: false,
		length: 20,
		precision: null,
		scale: null,
		mssql: {
			columnName: "id_maquina",
			dataType: "varchar",
			dataLength: 20,
			dataPrecision: null,
			dataScale: null,
			nullable: "YES",
		}
	})
	idMaquina: String;

	@property({
		type: String,
		required: false,
		length: 20,
		precision: null,
		scale: null,
		mssql: {
			columnName: "mode",
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
		length: 20,
		precision: null,
		scale: null,
		mssql: {
			columnName: "estat",
			dataType: "varchar",
			dataLength: 20,
			dataPrecision: null,
			dataScale: null,
			nullable: "YES",
		}
	})
	estat: String;

	@property({
		type: Date,
		required: false,
		length: null,
		precision: null,
		scale: null,
		mssql: {
			columnName: "ult_trans",
			dataType: "datetime",
			dataLength: null,
			dataPrecision: null,
			dataScale: null,
			nullable: "YES",
		}
	})
	ultTrans: Date;

	@property({
		type: Date,
		required: false,
		length: null,
		precision: null,
		scale: null,
		mssql: {
			columnName: "ult_con",
			dataType: "datetime",
			dataLength: null,
			dataPrecision: null,
			dataScale: null,
			nullable: "YES",
		}
	})
	ultCon: Date;

	@property({
		type: String,
		required: false,
		length: 20,
		precision: null,
		scale: null,
		mssql: {
			columnName: "distrib",
			dataType: "varchar",
			dataLength: 20,
			dataPrecision: null,
			dataScale: null,
			nullable: "YES",
		}
	})
	distrib: String;

	@property({
		type: Date,
		required: false,
		length: null,
		precision: null,
		scale: null,
		mssql: {
			columnName: "ult_report",
			dataType: "datetime",
			dataLength: null,
			dataPrecision: null,
			dataScale: null,
			nullable: "YES",
		}
	})
	ultReport: Date;

	@property({
		type: Date,
		required: false,
		length: null,
		precision: null,
		scale: null,
		mssql: {
			columnName: "t_locked",
			dataType: "datetime",
			dataLength: null,
			dataPrecision: null,
			dataScale: null,
			nullable: "YES",
		}
	})
	tLocked: Date;

	@property({
		type: Date,
		required: false,
		length: null,
		precision: null,
		scale: null,
		mssql: {
			columnName: "t_failure",
			dataType: "datetime",
			dataLength: null,
			dataPrecision: null,
			dataScale: null,
			nullable: "YES",
		}
	})
	tFailure: Date;

	@property({
		type: Date,
		required: false,
		length: null,
		precision: null,
		scale: null,
		mssql: {
			columnName: "ult_report_lock",
			dataType: "datetime",
			dataLength: null,
			dataPrecision: null,
			dataScale: null,
			nullable: "YES",
		}
	})
	ultReportLock: Date;

	@property({
		type: Date,
		required: false,
		length: null,
		precision: null,
		scale: null,
		mssql: {
			columnName: "ult_report_failure",
			dataType: "datetime",
			dataLength: null,
			dataPrecision: null,
			dataScale: null,
			nullable: "YES",
		}
	})
	ultReportFailure: Date;

	@property({
		type: Number,
		required: false,
		length: null,
		precision: 10,
		scale: 0,
		mssql: {
			columnName: "num_disc",
			dataType: "int",
			dataLength: null,
			dataPrecision: 10,
			dataScale: 0,
			nullable: "YES",
		}
	})
	numDisc: Number;

	@property({
		type: Number,
		required: false,
		length: null,
		precision: 10,
		scale: 0,
		mssql: {
			columnName: "temps_discM",
			dataType: "int",
			dataLength: null,
			dataPrecision: 10,
			dataScale: 0,
			nullable: "YES",
		}
	})
	tempsDiscm: Number;

	@property({
		type: Number,
		required: false,
		length: null,
		precision: 10,
		scale: 0,
		mssql: {
			columnName: "canvi",
			dataType: "int",
			dataLength: null,
			dataPrecision: 10,
			dataScale: 0,
			nullable: "YES",
		}
	})
	canvi: Number;

	@property({
		type: Date,
		required: false,
		length: null,
		precision: null,
		scale: null,
		mssql: {
			columnName: "ult_con_perm",
			dataType: "datetime",
			dataLength: null,
			dataPrecision: null,
			dataScale: null,
			nullable: "YES",
		}
	})
	ultConPerm: Date;

	@property({
		type: Number,
		required: false,
		length: null,
		precision: 10,
		scale: 0,
		mssql: {
			columnName: "cob_ayer",
			dataType: "int",
			dataLength: null,
			dataPrecision: 10,
			dataScale: 0,
			nullable: "YES",
		}
	})
	cobAyer: Number;

	@property({
		type: Number,
		required: false,
		length: null,
		precision: 10,
		scale: 0,
		mssql: {
			columnName: "cob_mensual",
			dataType: "int",
			dataLength: null,
			dataPrecision: 10,
			dataScale: 0,
			nullable: "YES",
		}
	})
	cobMensual: Number;

	@property({
		type: Number,
		required: false,
		length: null,
		precision: 10,
		scale: 0,
		mssql: {
			columnName: "ncon_mensual",
			dataType: "int",
			dataLength: null,
			dataPrecision: 10,
			dataScale: 0,
			nullable: "YES",
		}
	})
	nconMensual: Number;

	@property({
		type: Number,
		required: false,
		length: null,
		precision: 10,
		scale: 0,
		mssql: {
			columnName: "cob_anterior_mes",
			dataType: "int",
			dataLength: null,
			dataPrecision: 10,
			dataScale: 0,
			nullable: "YES",
		}
	})
	cobAnteriorMes: Number;

	@property({
		type: Number,
		required: false,
		length: null,
		precision: 10,
		scale: 0,
		mssql: {
			columnName: "ncon_anterior_mes",
			dataType: "int",
			dataLength: null,
			dataPrecision: 10,
			dataScale: 0,
			nullable: "YES",
		}
	})
	nconAnteriorMes: Number;

	@property({
		type: Number,
		required: false,
		length: null,
		precision: 10,
		scale: 0,
		mssql: {
			columnName: "canvi1",
			dataType: "int",
			dataLength: null,
			dataPrecision: 10,
			dataScale: 0,
			nullable: "YES",
		}
	})
	canvi1: Number;

	@property({
		type: String,
		required: false,
		length: 50,
		precision: null,
		scale: null,
		mssql: {
			columnName: "razon",
			dataType: "varchar",
			dataLength: 50,
			dataPrecision: null,
			dataScale: null,
			nullable: "YES",
		}
	})
	razon: String;

	@property({
		type: String,
		required: false,
		length: 50,
		precision: null,
		scale: null,
		mssql: {
			columnName: "dirmaq",
			dataType: "varchar",
			dataLength: 50,
			dataPrecision: null,
			dataScale: null,
			nullable: "YES",
		}
	})
	dirmaq: String;

	@property({
		type: String,
		required: false,
		length: 50,
		precision: null,
		scale: null,
		mssql: {
			columnName: "poblacion",
			dataType: "varchar",
			dataLength: 50,
			dataPrecision: null,
			dataScale: null,
			nullable: "YES",
		}
	})
	poblacion: String;

	@property({
		type: String,
		required: false,
		length: 50,
		precision: null,
		scale: null,
		mssql: {
			columnName: "emplasam",
			dataType: "varchar",
			dataLength: 50,
			dataPrecision: null,
			dataScale: null,
			nullable: "YES",
		}
	})
	emplasam: String;

	@property({
		type: Date,
		required: false,
		length: null,
		precision: null,
		scale: null,
		mssql: {
			columnName: "ult_report2",
			dataType: "datetime",
			dataLength: null,
			dataPrecision: null,
			dataScale: null,
			nullable: "YES",
		}
	})
	ultReport2: Date;

	@property({
		type: String,
		required: false,
		length: 50,
		precision: null,
		scale: null,
		mssql: {
			columnName: "cliente",
			dataType: "varchar",
			dataLength: 50,
			dataPrecision: null,
			dataScale: null,
			nullable: "YES",
		}
	})
	cliente: String;

	@property({
		type: Date,
		required: false,
		length: null,
		precision: null,
		scale: null,
		mssql: {
			columnName: "ul_report_transac",
			dataType: "datetime",
			dataLength: null,
			dataPrecision: null,
			dataScale: null,
			nullable: "YES",
		}
	})
	ulReportTransac: Date;

	constructor(data?: Partial<V2vbasic>) {
		super(data);
	}
}