이렇게 BusinessUser를 분리한 이유는 상속이나 추상 클래스, 인터페이스 등을 활용하면 회원과 기업 회원의 각 변경에 대해 유연하게 대처할 수 없기 때문이다.
만약 데이터베이스에서 사용자 테이블이 하나고 기업 회원 유무를 타입 컬럼을 통해 관리한다고 하더라도 여전히 유효할 수 있다.