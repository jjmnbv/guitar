//
//  ${root.objcPrefix}${name}Response.h
//  ${description}.响应报文
//
//  Created by 代码生成器1.0.
//
#import "MessageResponse.h"

<#list responseGroups as group>

@interface ${root.objcPrefix}${name}Element${group.id?cap_first} : Message
	<#list group.fields as field>
-(void)set${field.id?cap_first}:(NSString *)value;
-(NSString *)${field.id};
	</#list>
@end
</#list>

@interface ${root.objcPrefix}${name}Response : MessageResponse
<#list responseFields as field>
-(void)set${field.id?cap_first}:(NSString *)value;
-(NSString *)${field.id};
</#list>
<#list responseGroups as group>
-(void)set${group.id?cap_first}:(NSArray*)value;
-(NSArray*)${group.id};
</#list>

@end


