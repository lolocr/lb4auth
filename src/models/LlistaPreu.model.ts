import {Entity, model, property} from '@loopback/repository'

@model({
	name: "llista_preu"
})
export class LlistaPreu extends Entity {

	@property({
		type: Number,
		required: true,
		length: null,
		precision: 10,
		scale: 0,
		id: true,
		mssql: {
			columnName: "maquina",
			dataType: "int",
			dataLength: null,
			dataPrecision: 10,
			dataScale: 0,
			nullable: "NO",
		}
	})
	maquina: Number;

	@property({
		type: Number,
		required: true,
		length: null,
		precision: 10,
		scale: 0,
		id: true,
		mssql: {
			columnName: "maquina_id",
			dataType: "int",
			dataLength: null,
			dataPrecision: 10,
			dataScale: 0,
			nullable: "NO",
		}
	})
	maquinaId: Number;

	@property({
		type: Number,
		required: true,
		length: null,
		precision: 10,
		scale: 0,
		id: true,
		mssql: {
			columnName: "N_C",
			dataType: "int",
			dataLength: null,
			dataPrecision: 10,
			dataScale: 0,
			nullable: "NO",
		}
	})
	nC: Number;

	@property({
		type: String,
		required: false,
		length: 20,
		precision: null,
		scale: null,
		mssql: {
			columnName: "code_article",
			dataType: "varchar",
			dataLength: 20,
			dataPrecision: null,
			dataScale: null,
			nullable: "YES",
		}
	})
	codeArticle: String;

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
		type: Number,
		required: false,
		length: null,
		precision: 53,
		scale: null,
		mssql: {
			columnName: "pricelist1",
			dataType: "float",
			dataLength: null,
			dataPrecision: 53,
			dataScale: null,
			nullable: "YES",
		}
	})
	pricelist1: Number;

	@property({
		type: Number,
		required: false,
		length: null,
		precision: 53,
		scale: null,
		mssql: {
			columnName: "pricelist2",
			dataType: "float",
			dataLength: null,
			dataPrecision: 53,
			dataScale: null,
			nullable: "YES",
		}
	})
	pricelist2: Number;

	@property({
		type: Number,
		required: false,
		length: null,
		precision: 53,
		scale: null,
		mssql: {
			columnName: "pricelist3",
			dataType: "float",
			dataLength: null,
			dataPrecision: 53,
			dataScale: null,
			nullable: "YES",
		}
	})
	pricelist3: Number;

	@property({
		type: Number,
		required: false,
		length: null,
		precision: 53,
		scale: null,
		mssql: {
			columnName: "pricelist4",
			dataType: "float",
			dataLength: null,
			dataPrecision: 53,
			dataScale: null,
			nullable: "YES",
		}
	})
	pricelist4: Number;

	@property({
		type: Number,
		required: false,
		length: null,
		precision: 53,
		scale: null,
		mssql: {
			columnName: "pricelist5",
			dataType: "float",
			dataLength: null,
			dataPrecision: 53,
			dataScale: null,
			nullable: "YES",
		}
	})
	pricelist5: Number;

	@property({
		type: Number,
		required: false,
		length: null,
		precision: 53,
		scale: null,
		mssql: {
			columnName: "pts_diferent",
			dataType: "float",
			dataLength: null,
			dataPrecision: 53,
			dataScale: null,
			nullable: "YES",
		}
	})
	ptsDiferent: Number;

	@property({
		type: Number,
		required: false,
		length: null,
		precision: 53,
		scale: null,
		mssql: {
			columnName: "pts_canon",
			dataType: "float",
			dataLength: null,
			dataPrecision: 53,
			dataScale: null,
			nullable: "YES",
		}
	})
	ptsCanon: Number;

	@property({
		type: Number,
		required: false,
		length: null,
		precision: 53,
		scale: null,
		mssql: {
			columnName: "max_car",
			dataType: "float",
			dataLength: null,
			dataPrecision: 53,
			dataScale: null,
			nullable: "YES",
		}
	})
	maxCar: Number;

	@property({
		type: Number,
		required: false,
		length: null,
		precision: 53,
		scale: null,
		mssql: {
			columnName: "pts_difert",
			dataType: "float",
			dataLength: null,
			dataPrecision: 53,
			dataScale: null,
			nullable: "YES",
		}
	})
	ptsDifert: Number;

	@property({
		type: Number,
		required: false,
		length: null,
		precision: 53,
		scale: null,
		mssql: {
			columnName: "pts_canont",
			dataType: "float",
			dataLength: null,
			dataPrecision: 53,
			dataScale: null,
			nullable: "YES",
		}
	})
	ptsCanont: Number;

	@property({
		type: Date,
		required: false,
		length: null,
		precision: null,
		scale: null,
		mssql: {
			columnName: "fechacard",
			dataType: "smalldatetime",
			dataLength: null,
			dataPrecision: null,
			dataScale: null,
			nullable: "YES",
		}
	})
	fechacard: Date;

	@property({
		type: Number,
		required: false,
		length: null,
		precision: 53,
		scale: null,
		mssql: {
			columnName: "pvpmin",
			dataType: "float",
			dataLength: null,
			dataPrecision: 53,
			dataScale: null,
			nullable: "YES",
		}
	})
	pvpmin: Number;

	@property({
		type: Number,
		required: false,
		length: null,
		precision: 53,
		scale: null,
		mssql: {
			columnName: "max_car_val",
			dataType: "float",
			dataLength: null,
			dataPrecision: 53,
			dataScale: null,
			nullable: "YES",
		}
	})
	maxCarVal: Number;

	@property({
		type: Number,
		required: false,
		length: null,
		precision: 53,
		scale: null,
		mssql: {
			columnName: "capacidad",
			dataType: "float",
			dataLength: null,
			dataPrecision: 53,
			dataScale: null,
			nullable: "YES",
		}
	})
	capacidad: Number;

	@property({
		type: Number,
		required: false,
		length: null,
		precision: 10,
		scale: 0,
		mssql: {
			columnName: "visitasincarga",
			dataType: "int",
			dataLength: null,
			dataPrecision: 10,
			dataScale: 0,
			nullable: "YES",
		}
	})
	visitasincarga: Number;

	constructor(data?: Partial<LlistaPreu>) {
		super(data);
	}
}