import { Project, SkillCategory, Education, Award, Activity } from './types';

export const PROFILE = {
  name: "심기준",
  role: "게임 클라이언트 프로그래머",
  email: "ghgh10288@naver.com",
  phone: "010-9936-9750",
  github: "https://github.com/potato1028",
  youtube: "https://www.youtube.com/@심기준-z3j",
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
    team: "5인 팀 프로젝트",
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
  }
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