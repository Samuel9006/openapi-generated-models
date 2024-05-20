/**
 * User Management API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import { CreateUserDto } from './createUserDto';
import { CreateAdminDto } from './createAdminDto';


import { IsOptional, Validate, ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';
import { IsOnlyOnePropertyPresent } from './IsOnlyOnePropertyPresent';          
import { AtLeastOneOfProperties } from './AtLeastOneOfPropertiesConstraint';

/**
 * @class UserOrAdminDto
 * @export
 */
@AtLeastOneOfProperties(['createUserDto', 'createAdminDto'], {message : 'User or admin'})
export class UserOrAdminDto {
        @IsOptional()
        @ValidateNested()
        @Type(() => CreateAdminDto)
        @IsOnlyOnePropertyPresent(['createAdminDto', 'createUserDto'])
        createAdminDto: CreateAdminDto;
        
        @IsOptional()
        @ValidateNested()
        @Type(() => CreateUserDto)
        @IsOnlyOnePropertyPresent(['createUserDto', 'createAdminDto'])
        createUserDto: CreateUserDto;

}
