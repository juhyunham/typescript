{
	//enum - 여러가지의 관련된 상수값들을 한곳에 모아서 정의할 수 있게 도와줌

	// javascript 
	const MAX_NUM = 6
	const MAX_STUDENTS_PER_CLASS = 10

	const MONDAY = 0;
	const TUESDAY = 1;
	const WEDNESDAY = 2;
	const THURSDAY = 3;
	const FRIDAY = 4;
	const SATURDAY = 5;
	const SUNDAY = 6;

	const DAYS_ENUM = Object.freeze({
		"MONDAY": 0,
		"TUESDAY": 1,
		"WEDNESDAY": 2,
		"THURSDAY": 3,
		"FRIDAY": 4,
		"SATURDAY": 5,
		"SUNDAY": 6
	})
	const dayOfToday = DAYS_ENUM.MONDAY  //0

	// typescript
	enum Days {
		Monday,
		Tuesday,
		Wednesday,
		Thursday,
		Friday,
		Saturday,
		Sunday
	}

	console.log(Days.Monday)
	const day: Days = Days.Saturday
	// day = Days.Tuesday;
	// day = 1
	// 어떠한것을 할당할 수 있다는게 문제입니다.
}

