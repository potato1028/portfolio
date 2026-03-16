import { Project, SkillCategory, Education, Award, Activity } from './types';

export const PROFILE = {
  name: "심기준",
  role: "게임 클라이언트 프로그래머",
  email: "ghgh10288@naver.com",
  phone: "010-9936-9750",
  github: "https://github.com/potato1028",
  bio: "사용자에게 의미 있는 경험을 주기 위해 노력하는 개발자 심기준입니다.",
  summaries: [
    "단순한 기능 구현이 아닌, 코드의 재사용성 효율성을 먼저 고려합니다.",
    "디테일과 기본기를 끊임없이 탐구합니다.",
    "커뮤니케이션과 협업을 중요하게 생각하며 팀의 성장을 돕는 개발자가 되고 싶습니다."
  ]
};

export const SKILLS: SkillCategory[] = [
  {
    title: "Languages",
    items: [
      { name: "C", description: "ALgorithm", icon: "/img/Clogo.png"},
      { name: "C++", description: "Algorithm", icon: "/img/C++logo.png"},
      { name: "C#", description: "Unity Code", icon: "/img/Cslogo.png"},
      { name: "Python", description: "Using API", icon: "/img/Pythonlogo.png"}
    ]
  },
  {
    title: "Engines",
    items: [
      { name: "Unity Engine", description: "Game Engine", icon: "/img/Unitylogo.png" }
    ]
  },
  {
    title: "Tools & DevOps",
    items: [
      { name: "GitHub", description: "Version Control", icon: "/img/Githublogo.png" },
      { name: "Visual Studio", description: "IDE", icon: "/img/Vslogo.png" },
      { name: "Visual Studio Code", description: "IDE", icon: "/img/Vsclogo.png" },
      { name: "Notion", description: "Documentation", icon: "/img/Notionlogo.png" }
    ]
  }
];

export const PROJECTS: Project[] = [
  {
    id: "project-1",
    title: "LeafTale",
    description: "손 재활 및 발달 게임 플랫폼",
    period: "2024.07 ~ 2024.11 (약 5개월)",
    team: "13인 팀 프로젝트",
    tech: ["Unity", "C#", "LeapMotion SDK"],
    role: "Unity와 LeapMotion SDK연동, 손 움직임 데이터 수집 후 게임 데이터로 활용, 총 5가지의 미니게임 로직 개발",
    links: {
      github: "https://github.com/Danto7632/LeafTale?tab=readme-ov-file",
      video: "https://www.youtube.com/watch?v=eUpXLGqR8mU"
    },
    achievements: [
      "게임화된 재활 : 재미있는 게임을 통해 지속적인 재활 동기 부여",
      "실시간 분석 : LeapMotion을 통한 정밀한 손동작 추적 및 분석",
      "손동작 데이터 시각화 : 게임 종료 후 백엔드 API를 통해 실시간으로 데이터를 전송, 웹 대시보드에서 확인가능"
    ],
    troubleshooting: "센서의 미세한 떨림으로 인해 캐릭터가 의도치 않게 이동하거나, 1회의 동작이 프레임 단위로 중복 인식되어 게임 조작에 영향을 미치는 문제를 특정 제스쳐만 필터링하는 방식으로 떨림 문제를 해결하여 원활한 게임 플레이가 가능하도록 해결"
  },
  {
    id: "project-2",
    title: "GDP",
    description: "GDP는 G(게임) D(동계) P(프로젝트)의 약자로, 게임에 흥미를 가진 동아리 부원끼리 단기간에 완성한 창의적인 뱀서라이크 게임입니다.",
    period: "2024.01.09 ~ 2024.02.29 (약 2개월)",
    team: "2인 프로젝트",
    tech: ["Unity", "C#", "Pixel Art"],
    role: "전체 게임 로직(몹 스폰 알고리즘, 피격 판정, 플레이어 이동, 몹 이동) 및 게임 디자인",
    links: {
      github: "https://github.com/Danto7632/GDP",
      video: "https://www.youtube.com/watch?v=w6NejB-W_To"
    },
    achievements: [
      "다양한 알고리즘 활용 : 원형 인덱싱을 이용한 몹 스폰 알고리즘 구현.",
      "리소스 자체 제작 : 게임 기능 구현, 캐릭터 & 몹 & 아이템 & 배경 디자인까지 자체 개발",
    ],
    troubleshooting: "몹의 스폰 위치가 단조롭고 예측 가능하여 게임의 긴장감과 몰입감이 저하되는 문제를 해결하기 위해, 모듈로 연산을 활용하여 원형 배열 알고리즘과 난수 오프셋을 적용하여, 맵 외곽 360 전 방향에서 예측 불가능하게 적이 생성도록 구현함으로써 플레이어의 몰입감을 극대화하는 결과를 얻었습니다."
  },
  {
    id: "project-3",
    title: "CNWV (Roam After All)",
    description: "일상 속 걷기, 날씨, 시간 데이터를 활용해 스토리를 진행하는 몰입형 텍스트 RPG",
    period: "2025.04 ~ 2025.11 (약 8개월)",
    team: "4인 팀 프로젝트",
    tech: ["Unity", "C#", "Spring", "MySQL", "Android Studio", "Xcode"],
    role: "PM으로서 프로젝트 총괄, 사용자 위치 기반 날씨/디바이스 API 연동, 시드 기반 절차적 맵 생성 알고리즘 개발",
    links: {
      github: "https://github.com/DMU-RoamAfterAll/Roam_Game",
      video: "https://youtu.be/d6sdcJ38_Uk"
    },
    achievements: [
      "Android 및 iOS 플랫폼 대응 모바일 기능(걸음 수, 시간) 및 날씨 API 연동으로 동적 인게임 이벤트 구현",
      "Json 데이터를 바탕으로 시드 기반 절차적 맵 생성 알고리즘 개발 및 UI/UX 클라이언트 적용"
    ],
    troubleshooting: "맵 랜덤 생성 시 최소/최대 거리 제약 조건이 충돌하여 무한 루프에 빠지거나 특정 구역이 고립되는 버그가 발생했습니다. 생성 루프 내에 임계치 도달 시 강제 탈출하는 예외 처리를 추가하고, 방향 벡터를 계산해 도달 가능한 거리로 좌표를 자동 보정하는 후처리 로직을 직접 설계하여 어떤 시드값에서도 안전하게 맵이 생성되도록 최적화했습니다."
  },
  {
    id: "project-4",
    title: "게임 개발 맞춤형 AI 번역 툴",
    description: "해외 게임 튜토리얼 학습 시 발생하는 언어 장벽을 타파하기 위해 개발한 실시간 AI 자막 툴",
    period: "2026.02 (약 1개월)",
    team: "1인 개인 프로젝트",
    tech: ["Python", "Gemini API"],
    role: "유튜브 오디오 데이터 추출 및 타임라인 동기화, Gemini API 연동을 통한 번역 파이프라인 구축",
    links: {
      github : "https://github.com/potato1028/TranslateVideo/tree/main"
    },
    achievements: [
      "유튜브 영상 오디오 데이터 추출 및 타임라인 동기화 로직 개발",
      "Gemini API를 연동하여 추출된 음성/자막 데이터를 번역본으로 자동 생성하는 파이프라인 구축"
    ],
    troubleshooting: "기존 자동 번역기 사용 시 'Rigidbody', 'Collider' 등 필수 게임 엔진 용어들이 문맥에 맞지 않게 일상어로 직역되어 학습 흐름이 끊기는 문제가 있었습니다. 이를 해결하기 위해 API 요청 시 단순히 텍스트만 넘기는 대신 'Unity 엔진 게임 프로그래밍 환경'이라는 강력한 사전 컨텍스트(Prompt)를 부여하여, 전문 용어가 훼손되지 않고 정확한 개발 문맥으로 번역되도록 로직을 고도화했습니다."
  },
  {
    id: "project-5",
    title: "2D 플랫포머 커스텀 물리 엔진",
    description: "커스텀 물리 엔진과 Raycast 기반 컨트롤러를 독자적으로 구현한 2D 플랫포머 게임",
    period: "2026.02 ~ 현재",
    team: "1인 개인 프로젝트",
    tech: ["Unity", "C#"],
    role: "Raycast 기반 독자적 충돌 처리 및 이동 시스템 구현, Waypoints 기반 플랫폼 이동 로직 개발",
    links: {
      github : "https://github.com/potato1028/GGame"
    },
    achievements: [
      "Unity 내장 물리 엔진(Rigidbody2D)에 의존하지 않는 Raycast 기반 독자적 충돌/이동 시스템 구현",
      "경사면 오르내리기 및 벽면 충돌 제어 로직 작성",
      "Waypoints 기반 순환 이동 및 대기 시간 로직을 적용한 '움직이는 플랫폼' 구현"
    ],
    troubleshooting: "캐릭터 점프 입력 시 가끔씩 점프가 무시되거나 바닥을 뚫는 버그가 발생했습니다. Update문 내에서 이동 로직 호출 전 속도가 0으로 초기화되는 실행 순서의 결함임을 파악하고, Unity의 'Project Settings > Script Execution Order' 메뉴에서 물리 연산 스크립트와 입력 처리 스크립트의 실행 순서를 명시적으로 재배치하여 충돌 및 점프 버그를 완벽하게 해결했습니다."
  },
];

export const EDUCATION: Education[] = [
  {
    school: "검정고시",
    major: "",
    period: "2022년 8월 합격"
  },
  {
    school: "동양미래대학교",
    major: "컴퓨터소프트웨어공학과 전문학사과정",
    period: "2023.03 ~ 2026.02"
  },
  {
    school: "동양미래대학교",
    major: "인공지능소프트웨어학과 전공심화과정",
    period: "2026.03 ~ "
  }
];

export const AWARDS: Award[] = [
  { title: "2024 동양미래 EXPO (제 42회 졸업작품 전시회) 대상", date: "2024.11" },
  { title: "2024 LINC 3.0 캡스톤 디자인 경진대회 우수상", date: "2022.08" }
];

export const ACTIVITIES: Activity[] = [
  { title: "NYPC(Nexon Youth Programming Challenge) Online Round Certificate 참여", period: "2024.07 ~ 2024.08" }
];