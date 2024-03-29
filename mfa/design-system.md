# 디자인 시스템 (Design System)

**디자인 시스템**은 여러 페이지와 채널에서 공유 언어와 시각적 일관성을 유지하면서 중복을 줄여 대규모로 디자인을 관리하기 위한 일련의 표준

> 참조 : Design Systems 101

- 디자인 시스템은 *명확한 표준에 따라 재사용 가능한 구성 요소*의 모음으로, 여러 애플리케이션을 구축하기 위해 함께 조립할 수 있음
- 디자인 시스템은 애플리케이션이나 웹사이트와 같은 *디지털 제품 설계 및 제품 개발*에 도움이 됨
- 디자인 시스템에는 **패턴 라이브러리**, **디자인 언어**, **스타일 가이드**, **코딩된 구성 요소**, **브랜드 언어 및 문서**가 포함될 수 있지만 이에 국한되지는 않음
- **디자이너**, **개발자**, **카피라이터**, **프로젝트 관리자** 등 다양한 관련 팀이 디지털 제품을 디자인하고 구축하는 데 도움이 되는 참고 자료로 사용

### Design System 장점

- 디자인부터 프로덕션 워크플로까지 간소화
- 교차 기능 팀 간 및 팀 내에서 통합된 언어 생성
- 재사용 가능한 컴포넌트와 공유된 논리적 근거를 통해 제작 속도 향상
- 더욱 응집력 있는 사용자 경험과 일관된 디자인 언어를 통해 더 나은 제품을 제공
- 설계 및 기술 부채 감소를 통한 유지 관리 및 확장성 개선
- 공통된 문제를 해결하여 팀이 사용자 요구 사항을 해결하는 데 집중할 수 있으므로 제품 팀의 집중력 향상

### Design System 의 두가지 중요한 요소

#### the design repository (디자인 저장소)

- Style Guide
  - 스타일 가이드에는 인터페이스 또는 기타 디자인 결과물을 만들기 위한 **구체적인 구현 지침**, **시각적 레퍼런스** 및 **디자인 원칙**이 포함
- Component Library
  - 재사용 가능한 UI 요소가 포함되어 있으며 디자이너와 개발자 모두 특정 UI 요소에 대해 배우고 구현할 수 있는 원본의 역할을 함
- Pattern Library
  - UI 요소 그룹 또는 레이아웃의 컬렉션을 제공
  - 일반적으로 콘텐츠 구조, 레이아웃 및/또는 템플릿 포함
  - 컴포넌트와 마찬가지로 패턴은 재사용하고 조정할 수 있음

#### the people who manage it (관리주체)

- Design System Team (_디자인 시스템을 관리하는 팀_)
- 지속적으로 관리해야 효과가 있음 (_대부분의 팀은 지속적 관리를 실패했기때문에 디자인 시스템에 실패하는 것이라고 생각됨_)

### 📔 Micro Frontends 와 Design System 의 관계

- 마이크로 프론트엔드는 하나의 어플리케이션
- 하나의 어플리케이션인데 서로 다른 서비스처럼 보이면 완성도가 떨어져 고객의 신뢰가 떨어질 수 있음 (**_UX 저하_**)
- 여러 End-to-End 팀들이 각자 작업을 하다보면 파편화가 발생할 수 있고, 생산성에도 문제가 생길 수 있음 (_중복소스 발생 가능성_)
- 디자인과 개발의 Single Source of Truth 가 필요하고, 디자인 원칙과 재사용 가능한 컴포넌트의 관리가 필수적
- 디자인 시스템은 일반적으로 관리를 하는 만큼 강력한 힘을 보유
