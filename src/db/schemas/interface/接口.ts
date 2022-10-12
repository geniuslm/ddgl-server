import { Prop, Schema } from '@nestjs/mongoose';
import { ApiProperty } from '@nestjs/swagger';
import { Document } from 'mongoose';

// 用户的数据模型
@Schema()
export class 用户类 extends Document {       // 定义数据模型 之后通过这个class建立对象
    // @Prop()                              
    // @ApiProperty({ description: '用户名', example: 'admin' })   //一个例子
    // 用户名: string;
    @Prop()       用户名: string;
    @Prop()       密码 : string;
    @Prop()       手机号: string;

}

//旧订单的数据模型
@Schema()
export class 订单类 extends Document {       // 定义数据模型 之后通过这个class建立对象
    @Prop()    _id  : string;
    @Prop()    收件人  : string;
    @Prop()    旺旺名  : string;
    @Prop()    镜片下单日: string;
    @Prop()    镜片   : string;
    @Prop()    右近视  : string;
    @Prop()    右散光  : string;
    @Prop()    右轴向  : string;
    @Prop()    左近视  : string;
    @Prop()    左散光  : string;
    @Prop()    左轴向  : string;
    @Prop()    右瞳距  : string;
    @Prop()    左瞳距  : string;
    @Prop()    备注   : string;

}

// 新订单的数据模型
@Schema()
export class 镜片类 extends Document {       // 定义数据模型 之后通过这个class建立对象
    @Prop()    _id  : string;
    @Prop()    收件人  : string;
    @Prop()    旺旺名  : string;
    @Prop()    镜片下单日: string;
    @Prop()    镜片   : string;
    @Prop()    右近视  : string;
    @Prop()    右散光  : string;
    @Prop()    右轴向  : string;
    @Prop()    左近视  : string;
    @Prop()    左散光  : string;
    @Prop()    左轴向  : string;
    @Prop()    右瞳距  : string;
    @Prop()    左瞳距  : string;
    @Prop()    备注   : string;

}