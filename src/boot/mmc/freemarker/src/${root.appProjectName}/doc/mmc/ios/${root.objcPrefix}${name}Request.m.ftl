//
//  ${root.objcPrefix}${name}Request.m
//  ${description}.请求报文
//
//  Created by 代码生成器1.0.
//

#import "${root.objcPrefix}${name}Request.h"
#import "${root.objcPrefix}${name}Response.h"

<#list requestGroups as group>
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

<#list requestFields as field>
#define C_${field.id?upper_case}      @"${field.id}"
</#list>
<#list requestGroups as group>
#define C_${group.id?upper_case}      @"${group.id}"
</#list>


@implementation ${root.objcPrefix}${name}Request

+(Class)responseClass {    
    return [${root.objcPrefix}${name}Response class];
}

+(NSString*)RA_type {
    return @"${id}";
}

-(id)init {
    self = [super init];
    if ( self ) {
    }
    return self;
}

<#list requestFields as field>
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

<#list requestGroups as group>
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


