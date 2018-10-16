import {Entity, model, property} from '@loopback/repository'

@model({
	name: "rtv_trans_articles"
})
export class RtvTransArticles extends Entity {

	@property({
		type: Number,
		required: true,
		length: null,
		precision: 10,
		scale: 0,
		id: true,
		mssql: {
			columnName: "transaction_id",
			dataType: "int",
			dataLength: null,
			dataPrecision: 10,
			dataScale: 0,
			nullable: "NO",
		}
	})
	transactionId: Number;

	@property({
		type: Number,
		required: true,
		length: null,
		precision: 10,
		scale: 0,
		mssql: {
			columnName: "article_id",
			dataType: "int",
			dataLength: null,
			dataPrecision: 10,
			dataScale: 0,
			nullable: "NO",
		}
	})
	articleId: Number;

	@property({
		type: Number,
		required: false,
		length: null,
		precision: 10,
		scale: 3,
		mssql: {
			columnName: "qty_weight",
			dataType: "numeric",
			dataLength: null,
			dataPrecision: 10,
			dataScale: 3,
			nullable: "YES",
		}
	})
	qtyWeight: Number;

	@property({
		type: Number,
		required: false,
		length: null,
		precision: 10,
		scale: 2,
		mssql: {
			columnName: "price",
			dataType: "numeric",
			dataLength: null,
			dataPrecision: 10,
			dataScale: 2,
			nullable: "YES",
		}
	})
	price: Number;

	@property({
		type: Number,
		required: false,
		length: null,
		precision: 5,
		scale: 2,
		mssql: {
			columnName: "vat_percent",
			dataType: "numeric",
			dataLength: null,
			dataPrecision: 5,
			dataScale: 2,
			nullable: "YES",
		}
	})
	vatPercent: Number;

	@property({
		type: Number,
		required: false,
		length: null,
		precision: 10,
		scale: 2,
		mssql: {
			columnName: "discount",
			dataType: "numeric",
			dataLength: null,
			dataPrecision: 10,
			dataScale: 2,
			nullable: "YES",
		}
	})
	discount: Number;

	@property({
		type: Number,
		required: false,
		length: null,
		precision: 10,
		scale: 2,
		mssql: {
			columnName: "promotion_discount",
			dataType: "numeric",
			dataLength: null,
			dataPrecision: 10,
			dataScale: 2,
			nullable: "YES",
		}
	})
	promotionDiscount: Number;

	@property({
		type: Number,
		required: false,
		length: null,
		precision: 10,
		scale: 0,
		mssql: {
			columnName: "operator_id",
			dataType: "int",
			dataLength: null,
			dataPrecision: 10,
			dataScale: 0,
			nullable: "YES",
		}
	})
	operatorId: Number;

	@property({
		type: Number,
		required: false,
		length: null,
		precision: 10,
		scale: 0,
		mssql: {
			columnName: "till_id",
			dataType: "int",
			dataLength: null,
			dataPrecision: 10,
			dataScale: 0,
			nullable: "YES",
		}
	})
	tillId: Number;

	@property({
		type: Number,
		required: false,
		length: null,
		precision: 1,
		scale: 0,
		mssql: {
			columnName: "subsidized",
			dataType: "numeric",
			dataLength: null,
			dataPrecision: 1,
			dataScale: 0,
			nullable: "YES",
		}
	})
	subsidized: Number;

	@property({
		type: Number,
		required: false,
		length: null,
		precision: 10,
		scale: 2,
		mssql: {
			columnName: "subsidized_amount",
			dataType: "numeric",
			dataLength: null,
			dataPrecision: 10,
			dataScale: 2,
			nullable: "YES",
		}
	})
	subsidizedAmount: Number;

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

	constructor(data?: Partial<RtvTransArticles>) {
		super(data);
	}
}