import PresidentImage from "@/assets/committee/Alex.jpg";
import TreasurerImage from "@/assets/committee/Yiyang.jpeg";
import SecretaryImage from "@/assets/committee/Akarsh.jpg";
import AcademicOfficer1Image from "@/assets/committee/Arda.jpeg";
import AcademicOfficer2Image from "@/assets/committee/Yikuan.jpg";
import SocialSecretary1Image from "@/assets/committee/Delina.jpeg";
import SocialSecretary2Image from "@/assets/committee/Oskar.jpeg";
import ITOfficerImage from "@/assets/committee/ME!!!.jpg";
import PublicityOfficerImage from "@/assets/committee/Angie.jpeg";

export const CommitteeList: Record<string, CommitteeMember | CommitteeMember[]> = {
	"President": {
		name: "Alex Rathour",
		image: PresidentImage,
	},
	"Treasurer": {
		name: "Yiyang Xu",
		image: TreasurerImage,
	},
	"Secretary": {
		name: "Akarsh Sahay",
		image: SecretaryImage,
	},
	"Academic Officer": [{
		name: "Arda Kurtoğlu",
		image: AcademicOfficer1Image,
	}, {
		name: "Yikuan Yan",
		image: AcademicOfficer2Image,
	}],
	"Social Secretary": [{
		name: "Delina Gabriel",
		image: SocialSecretary1Image,
	}, {
		name: "Oskar Nowak",
		image: SocialSecretary2Image,
	}],
	"IT Officer": [{
		name: "Edison Fu",
		image: ITOfficerImage,
	}],
	"Publicity Officer": [{
		name: "Angie Wang",
		image: PublicityOfficerImage,
	}]
};

interface CommitteeMember {
	name: string,
	image: string,
}