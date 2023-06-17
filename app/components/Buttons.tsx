import Link from "next/link";

interface MyButton {
  text: string;
  link: string;
  hover: boolean;
}

export default function ButtonPage(props: MyButton) {
  return (
    <Link href={props.link}>
      <button className={ props.hover ?  "rounded-[60px] py-4 px-14 bg-transparent border border-white hover:bg-[#7049C3] hover:border-[#7049C3] " : "bg-[#7049C3] rounded-[60px] py-4 px-14"}>
        <p className="text-xl font-semibold">{props.text}</p>
      </button>
    </Link>
  );
}
