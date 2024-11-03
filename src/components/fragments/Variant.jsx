import VariantContent from "../elements/VariantContent";
import "./stroke.css";

export default function Variant() {
  return (
    <section className="h-screen bg-variant bg-cover bg-no-repeat bg-center border-[7px] border-black border-solid flex justify-center items-center">
      <VariantContent />
    </section>
  );
}
