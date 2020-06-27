// @ts-ignore
import stage4Icon from "../assets/images/approval.svg";
// @ts-ignore
import stage1Icon from "../assets/images/exploratory.svg";
// @ts-ignore
import stage3Icon from "../assets/images/humanTrials.svg";
// @ts-ignore
import stage2Icon from "../assets/images/preClinical.svg";
// @ts-ignore
import stage5Icon from "../assets/images/production.svg";

export const vaccineObj = {
  s1: {
    class: "s1",
    icon: stage1Icon,
    icon_alt: "Vaccine at Pre Clinical Stage",
    text: "Stage 1"
  },
  s2: {
    class: "s2",
    icon: stage2Icon,
    icon_alt: "Vaccine at Exploratory Stage",
    text: "Stage 2"
  },
  s3Phase1: {
    class: "s3",
    icon: stage3Icon,
    icon_alt: "Vaccine at Human Trials Stage Phase 1, Phase 2, Phase 3",
    text: "Stage 3 : Phase 1"
  },
  s3Phase2: {
    class: "s3",
    icon: stage3Icon,
    icon_alt: "Vaccine at Human Trials Stage Phase 1, Phase 2, Phase 3",
    text: "Stage 3 : Phase 2"
  },
  s3Phase3: {
    class: "s3",
    icon: stage3Icon,
    icon_alt: "Vaccine at Human Trials Stage Phase 1, Phase 2, Phase 3",
    text: "Stage 3 : Phase 3"
  },
  s4: {
    class: "s4",
    icon: stage4Icon,
    icon_alt: "Vaccine at Approval Stage",
    text: "Stage 4"
  },
  s5: {
    class: "s4",
    icon: stage5Icon,
    icon_alt: "Vaccine at Approval Stage",
    text: "Stage 5"
  },
  default: {}
};

