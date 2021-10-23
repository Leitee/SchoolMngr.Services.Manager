//     This code was generated by a Reinforced.Typings tool.
//     Changes to this file may cause incorrect behavior and will be lost if
//     the code is regenerated.

export interface Assignment
{
	id: string;
	from: Date;
	to?: Date;
	class: Class;
	teacher: Teacher;
}
export interface Class
{
	id: string;
	divisionName: string;
	shift: ShiftTimeEnum;
	startsAt: Date;
	endsAt: Date;
	day: number;
	enrolledQty: number;
	deleted: boolean;
	subject: Subject;
	classRoom: ClassRoom;
	assingments: Assignment[];
	enrollments: Enrollment[];
}
export interface ClassRoom
{
	id: string;
	description: string;
	capacity: number;
	hasNetworkConexion?: boolean;
	hasScreenProjector?: boolean;
}
export interface Enrollment
{
	id: string;
	studentProfileId: string;
	studentStatus: string;
	class: Class;
}
export interface Grade
{
	id: number;
	name: string;
	subjects: Subject[];
}
export interface Subject
{
	id: string;
	codeName: string;
	fullName: string;
	maxAbsencesAllowed: number;
	minExamScoreRequired: number;
	deleted: boolean;
	nextAvailableId?: string;
	nextAvailable: Subject;
	previousRequired: Subject[];
	grade: Grade;
	class: Class;
}
export interface Teacher
{
	id: string;
	employeeNumber: string;
	deleted: boolean;
	address: string;
	isTemporary: boolean;
	observations: string;
	identityUserId: string;
	assingments: Assignment[];
}
declare enum SchoolRolesEnum {
	ADMINISTRADOR = 1,
	TEACHER = 2,
	STUDENT = 3
}
declare enum ShiftTimeEnum {
	MORNING = 1,
	EVENING = 2,
	AFTERNOON = 3,
	NIGHT = 4
}
