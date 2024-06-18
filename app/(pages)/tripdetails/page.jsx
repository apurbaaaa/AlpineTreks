import TripDetails from "@/components/layout/components/trip-details"
import Header4 from "@/components/layout/header/Header4";
import FooterFour from "@/components/layout/footers/FooterFour";
import TopTreks from "@/components/homes/tours/Top10treks";
export default function page(){
    return(
        <div>
            <TripDetails />
            <TopTreks />
        </div>
        
    )
}