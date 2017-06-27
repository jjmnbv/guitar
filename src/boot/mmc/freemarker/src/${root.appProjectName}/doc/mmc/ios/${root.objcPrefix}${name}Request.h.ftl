//
//  ${root.objcPrefix}${name}Request.h
//  ${description}.请求报文
//
//  Created by 代码生成器1.0.
//
#import "MessageRequest.h"
<#list requestGroups as group>

@interface ${root.objcPrefix}${name}Element${group.id?cap_first} : Message
	<#list group.fields as field>
-(void)set${field.id?cap_first}:(NSString *)value;
-(NSString *)${field.id};
	</#list>
@end
</#list>

@interface ${root.objcPrefix}${name}Request : MessageRequest
<#list requestFields as field>
-(void)set${field.id?cap_first}:(NSString *)value;
-(NSString *)${field.id};
</#list>
<#list requestGroups as group>
-(void)set${group.id?cap_first}:(NSArray*)value;
-(NSArray*)${group.id};
</#list>

@end


