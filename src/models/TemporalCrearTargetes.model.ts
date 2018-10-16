import {Entity, model, property} from '@loopback/repository'

@model({
	name: "Temporal_Crear_targetes"
})
export class TemporalCrearTargetes extends Entity {

	@property({
		type: String,
		required: true,
		length: 30,
		precision: null,
		scale: null,
		id: true,
		mssql: {
			columnName: "card_num",
			dataType: "varchar",
			dataLength: 30,
			dataPrecision: null,
			dataScale: null,
			nullable: "NO",
		}
	})
	cardNum: String;

	@property({
		type: String,
		required: false,
		length: 30,
		precision: null,
		scale: null,
		mssql: {
			columnName: "existeix",
			dataType: "varchar",
			dataLength: 30,
			dataPrecision: null,
			dataScale: null,
			nullable: "YES",
		}
	})
	existeix: String;

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
		required: true,
		length: null,
		precision: 10,
		scale: 0,
		mssql: {
			columnName: "Grupo_id",
			dataType: "int",
			dataLength: null,
			dataPrecision: 10,
			dataScale: 0,
			nullable: "NO",
		}
	})
	grupoId: Number;

	constructor(data?: Partial<TemporalCrearTargetes>) {
		super(data);
	}
}