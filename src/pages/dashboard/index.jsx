import { CardContext } from "../../context/card.context";
import apiHandler from "../../utils/apiHandler";
import FilterDisplay from "../../../components/UI/dashboard/filter-display";
import DeckBuilder from "../../../components/UI/dashboard/deck-builder";
import DashNav from "../../../components/UI/dashboard/dash-nav";
import CardDisplay from "../../../components/UI/dashboard/card-display";

const Dashboard = ({ data }) => {
  return (
    <CardContext>
      <div className="flex gap-8">
        <aside className="w-1/4 bg-transparent border p-2 rounded-md border-gray-500 shadow-sm">
          <DeckBuilder />
          <FilterDisplay />
        </aside>
        <div className="w-3/4">
          <DashNav />
          <div className="w-full">
            <CardDisplay data={data} />
          </div>
        </div>
      </div>
    </CardContext>
  );
};

export async function getServerSideProps() {
  const data = await apiHandler("cards?page=1");
  return { props: { data } };
}

export default Dashboard;
