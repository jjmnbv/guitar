//
//  ${root.objcPrefix}${name}Response.m
//  ${description}.响应报文
//
//  Created by 代码生成器1.0.
//

#import "${root.objcPrefix}${name}Response.h"

<#list responseGroups as group>
	<#list group.fields as field>
#define C_${group.id?upper_case}_${field.id?upper_case}        @"${field.id}"
	</#list>

@interface ${root.objcPrefix}${name}Element${group.id?cap_first} ()

@end

@implementation ${root.objcPrefix}${name}Element${group.id?cap_first}

-(id)init {
    self = [super init];
    if ( self ) {
    }
    return self;
}

	<#list group.fields as field>
-(void)set${field.id?cap_first}:(NSString *)value {
	id objcValue;
	objcValue = value;
	self.context[C_${group.id?upper_case}_${field.id?upper_case}] = objcValue;
}

-(NSString *) ${field.id} {
	NSString * value = self.context[C_${group.id?upper_case}_${field.id?upper_case}];
	return value;
}
	</#list>
@end
</#list>

<#list responseFields as field>
#define C_${field.id?upper_case}      @"${field.id}"
</#list>
<#list responseGroups as group>
#define C_${group.id?upper_case}      @"${group.id}"
</#list>


@interface ${root.objcPrefix}${name}Response ()

@end

@implementation ${root.objcPrefix}${name}Response

+(id)responseWithReponseData:(NSData*)responseData {
    ${root.objcPrefix}${name}Response* response = [[self alloc] init];
    [response fromString: [[NSString alloc] initWithData: responseData encoding: NSUTF8StringEncoding]];
    return response;
}

-(id)init {
    self = [super init];
    if ( self ) {
    }
    return self;
}

<#list responseFields as field>
-(void)set${field.id?cap_first}:(NSString *)value {
	id objcValue;
	objcValue = value;
	self.context[C_${field.id?upper_case}] = objcValue;
}

-(NSString *)${field.id} {
	NSString * value = self.context[C_${field.id?upper_case}];
	return value;
}
</#list>

<#list responseGroups as group>
-(void)set${group.id?cap_first}:(NSArray*)subList {
	NSMutableArray *newArray = [NSMutableArray new];
	
 	for (${root.objcPrefix}${name}Element${group.id?cap_first} *sub in subList) {
		[newArray addObject:sub.context];
	}
	self.context[C_${group.id?upper_case}] = newArray;
}

-(NSArray*)${group.id} {
	NSMutableArray *groupList = [NSMutableArray new];
	NSArray *subList = self.context[C_${group.id?upper_case}];
	
	for (NSMutableDictionary *subContext in subList) {
		${root.objcPrefix}${name}Element${group.id?cap_first} *newSubValue = [${root.objcPrefix}${name}Element${group.id?cap_first} new];
		newSubValue.context = subContext;
		[groupList addObject:newSubValue];
	}
	
    return groupList;
}

</#list>

@end


