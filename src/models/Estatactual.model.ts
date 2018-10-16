import {Entity, model, property} from '@loopback/repository'

@model({
	name: "estatactual"
})
export class Estatactual extends Entity {

	@property({
		type: String,
		required: true,
		length: 20,
		precision: null,
		scale: null,
		id: true,
		mssql: {
			columnName: "id_maquina",
			dataType: "varchar",
			dataLength: 20,
			dataPrecision: null,
			dataScale: null,
			nullable: "NO",
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
		type: String,
		required: false,
		length: 30,
		precision: null,
		scale: null,
		mssql: {
			columnName: "client",
			dataType: "varchar",
			dataLength: 30,
			dataPrecision: null,
			dataScale: null,
			nullable: "YES",
		}
	})
	client: String;

	@property({
		type: String,
		required: false,
		length: 40,
		precision: null,
		scale: null,
		mssql: {
			columnName: "emplasam",
			dataType: "varchar",
			dataLength: 40,
			dataPrecision: null,
			dataScale: null,
			nullable: "YES",
		}
	})
	emplasam: String;

	constructor(data?: Partial<Estatactual>) {
		super(data);
	}
}