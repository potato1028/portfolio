import { Project, SkillCategory, Education, Award, Activity } from './types';

export const PROFILE = {
  name: "OOO",
  role: "게임 클라이언트 프로그래머",
  email: "OOO@email.com",
  phone: "010-XXXX-XXXX",
  github: "https://github.com/username",
  blog: "https://notion.so/username",
  bio: "사용자 경험을 고민하는 개발자 OOO입니다.",
  summaries: [
    "주도적으로 문제를 해결하는 것을 좋아합니다.",
    "실시간 렌더링 기술과 최적화에 관심이 많으며, 고성능 게임 엔진 개발을 목표로 하고 있습니다.",
    "커뮤니케이션과 협업을 중요하게 생각하며 팀의 성장을 돕는 개발자가 되고 싶습니다."
  ]
};

export const SKILLS: SkillCategory[] = [
  {
    title: "Languages",
    items: [
      { name: "C++", description: "Advanced", icon: "https://picsum.photos/seed/cpp/100/100" },
      { name: "C#", description: "Intermediate", icon: "https://picsum.photos/seed/csharp/100/100" },
      { name: "HLSL", description: "Shader Programming", icon: "https://picsum.photos/seed/hlsl/100/100" }
    ]
  },
  {
    title: "Engines",
    items: [
      { name: "Unreal Engine 5", description: "Primary Engine", icon: "https://picsum.photos/seed/ue/100/100" },
      { name: "Unity", description: "Secondary Engine", icon: "https://picsum.photos/seed/unity/100/100" },
      { name: "DirectX 12", description: "Graphics API", icon: "https://picsum.photos/seed/dx12/100/100" }
    ]
  },
  {
    title: "Tools & DevOps",
    items: [
      { name: "Git", description: "Version Control", icon: "https://picsum.photos/seed/git/100/100" },
      { name: "Perforce", description: "Version Control", icon: "https://picsum.photos/seed/p4/100/100" },
      { name: "Jira", description: "Project Management", icon: "https://picsum.photos/seed/jira/100/100" },
      { name: "Jenkins", description: "CI/CD", icon: "https://picsum.photos/seed/jenkins/100/100" },
      { name: "Visual Studio", description: "IDE", icon: "https://picsum.photos/seed/vs/100/100" },
      { name: "Notion", description: "Documentation", icon: "https://picsum.photos/seed/notion/100/100" }
    ]
  }
];

export const PROJECTS: Project[] = [
  {
    id: "project-1",
    title: "Project Alpha",
    description: "고퀄리티 그래픽의 3인칭 액션 RPG 게임",
    period: "2023.03 ~ 2023.09 (6개월)",
    team: "5인 팀 프로젝트",
    tech: ["Unreal Engine 5", "C++", "GAS"],
    role: "전투 시스템 및 스킬 시스템 구현",
    links: {
      github: "https://github.com/username/project-alpha",
      video: "https://youtube.com/watch?v=example1"
    },
    achievements: [
      "Gameplay Ability System(GAS)을 활용한 확장성 있는 스킬 시스템 설계",
      "컴포넌트 기반 아키텍처를 도입하여 캐릭터 상태 머신 최적화",
      "멀티스레딩을 이용한 대규모 적 AI 연산 분산 처리"
    ],
    troubleshooting: "프레임 드랍 문제를 해결하기 위해 프로파일링 툴을 사용하여 병목 지점을 파악했습니다. 불필요한 액터 틱을 비활성화하고 오브젝트 풀링을 적용하여 성능을 30% 향상시켰습니다."
  },
  {
    id: "project-2",
    title: "Project Beta",
    description: "모바일 환경에 최적화된 캐주얼 퍼즐 게임",
    period: "2022.10 ~ 2023.01 (4개월)",
    team: "1인 프로젝트",
    tech: ["Unity", "C#", "Addressables"],
    role: "전체 게임 로직 및 UI/UX 개발",
    links: {
      github: "https://github.com/username/project-beta",
      video: "https://youtube.com/watch?v=example2"
    },
    achievements: [
      "Addressables System을 이용한 에셋 동적 로딩 및 메모리 관리 최적화",
      "사용자 정의 쉐이더를 활용한 저사양 기기용 이펙트 구현",
      "Firebase를 연동한 실시간 랭킹 시스템 구축"
    ],
    troubleshooting: "모바일 기기에서 메모리 부족으로 인한 크래시 현상이 발생했습니다. 텍스처 압축 형식을 변경하고 에셋 참조 구조를 개선하여 메모리 점유율을 40% 절감했습니다."
  }
];

export const EDUCATION: Education = {
  school: "OOO대학교",
  major: "컴퓨터공학과",
  period: "2018.03 ~ 2024.02"
};

export const AWARDS: Award[] = [
  { title: "OOO 경진대회 대상 수상", date: "2023.11" },
  { title: "OOO 공모전 우수상 수상", date: "2022.08" }
];

export const ACTIVITIES: Activity[] = [
  { title: "OOO 게임 개발 동아리 회장", period: "2022.03 ~ 2023.02" },
  { title: "OOO 오픈소스 컨트리뷰션 활동", period: "2021.07 ~ 2021.12" }
];

