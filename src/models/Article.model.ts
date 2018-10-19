import {Entity, model, property} from '@loopback/repository'

@model({
	name: "articles"
})
export class Article extends Entity {

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
		required: true,
		length: 20,
		precision: null,
		scale: null,
		mssql: {
			columnName: "code",
			dataType: "varchar",
			dataLength: 20,
			dataPrecision: null,
			dataScale: null,
			nullable: "NO",
		}
	})
	code: String;

	@property({
		type: String,
		required: true,
		length: 40,
		precision: null,
		scale: null,
		mssql: {
			columnName: "description",
			dataType: "varchar",
			dataLength: 40,
			dataPrecision: null,
			dataScale: null,
			nullable: "NO",
		}
	})
	description: String;

	@property({
		type: String,
		required: false,
		length: 20,
		precision: null,
		scale: null,
		mssql: {
			columnName: "short_description",
			dataType: "varchar",
			dataLength: 20,
			dataPrecision: null,
			dataScale: null,
			nullable: "YES",
		}
	})
	shortDescription: String;

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
		type: String,
		required: false,
		length: 40,
		precision: null,
		scale: null,
		mssql: {
			columnName: "notes2",
			dataType: "varchar",
			dataLength: 40,
			dataPrecision: null,
			dataScale: null,
			nullable: "YES",
		}
	})
	notes2: String;

	@property({
		type: String,
		required: false,
		length: 40,
		precision: null,
		scale: null,
		mssql: {
			columnName: "notes3",
			dataType: "varchar",
			dataLength: 40,
			dataPrecision: null,
			dataScale: null,
			nullable: "YES",
		}
	})
	notes3: String;

	@property({
		type: Number,
		required: false,
		length: null,
		precision: 10,
		scale: 0,
		mssql: {
			columnName: "group_a_id",
			dataType: "int",
			dataLength: null,
			dataPrecision: 10,
			dataScale: 0,
			nullable: "YES",
		}
	})
	groupAId: Number;

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
		required: false,
		length: null,
		precision: 10,
		scale: 0,
		mssql: {
			columnName: "Proveidor_id",
			dataType: "int",
			dataLength: null,
			dataPrecision: 10,
			dataScale: 0,
			nullable: "YES",
		}
	})
	proveidorId: Number;

	@property({
		type: Number,
		required: false,
		length: null,
		precision: 10,
		scale: 0,
		mssql: {
			columnName: "group_d_id",
			dataType: "int",
			dataLength: null,
			dataPrecision: 10,
			dataScale: 0,
			nullable: "YES",
		}
	})
	groupDId: Number;

	@property({
		type: Number,
		required: false,
		length: null,
		precision: 10,
		scale: 0,
		mssql: {
			columnName: "subsidy_group_id",
			dataType: "int",
			dataLength: null,
			dataPrecision: 10,
			dataScale: 0,
			nullable: "YES",
		}
	})
	subsidyGroupId: Number;

	@property({
		type: Number,
		required: false,
		length: null,
		precision: 10,
		scale: 0,
		mssql: {
			columnName: "vat1_id",
			dataType: "int",
			dataLength: null,
			dataPrecision: 10,
			dataScale: 0,
			nullable: "YES",
		}
	})
	vat1Id: Number;

	@property({
		type: Number,
		required: false,
		length: null,
		precision: 10,
		scale: 0,
		mssql: {
			columnName: "vat2_id",
			dataType: "int",
			dataLength: null,
			dataPrecision: 10,
			dataScale: 0,
			nullable: "YES",
		}
	})
	vat2Id: Number;

	@property({
		type: Number,
		required: false,
		length: null,
		precision: 10,
		scale: 0,
		mssql: {
			columnName: "vat3_id",
			dataType: "int",
			dataLength: null,
			dataPrecision: 10,
			dataScale: 0,
			nullable: "YES",
		}
	})
	vat3Id: Number;

	@property({
		type: Number,
		required: false,
		length: null,
		precision: 10,
		scale: 0,
		mssql: {
			columnName: "vat4_id",
			dataType: "int",
			dataLength: null,
			dataPrecision: 10,
			dataScale: 0,
			nullable: "YES",
		}
	})
	vat4Id: Number;

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

	constructor(data?: Partial<Article>) {
		super(data);
	}
}