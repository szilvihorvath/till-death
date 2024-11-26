import { Link } from "react-router-dom"
import Hands from "/assets/hands.svg";
import "./styles.css"

const Faq = () => {
    return (
        <div className="faq" id='faq'>
            <img className="hands" src={Hands} alt="" width={"80%"}/>
            <h2>Useful Things</h2>

            <details>
                <summary><h3 className="question">Am I invited to the ceremony too?</h3></summary>
                <p>The ceremony will take place in a small venue, attended by our close family only. 
                Unless you have received a separate invitation to the ceremony, the invite is just for the reception.</p>
            </details>

            <details>
                <summary><h3 className="question">Can I bring my kid(s)?</h3></summary>
                <p>Due to limited capacity, with the exception of close family, this will be an adults only event.</p>
            </details>

            <details>
                <summary>
                    <h3 className="question">Can I bring a plus one?</h3>
                </summary>
                <p>The invite is only for the number of people noted on there. In the event of cancellations there may be space closer to the event, reach out to Szilvi or Liam and we'll let you know!</p>
            </details>

            <details>
                <summary>
                    <h3 className="question">RSVP</h3>
                </summary>
                <p>
                    Click <Link className="faq__link" to={"/rsvp"}>HERE</Link> or contact Szilvi or Liam if you're having difficulties.
                    Please get back to us before the 15th of January, 2025.
                </p>
            </details>

            <details>
                <summary>
                    <h3 className="question">Dress code</h3>
                </summary>
                <p>Semi formal</p>
            </details>

            <details>
                <summary>
                    <h3 className="question">Gifts</h3>
                </summary>
                <p>
                    Your presence is all that we wish for, but if you would like to give a gift, any cash gifts towards our honeymoon fund are welcome. 
                    Here's a <a className="faq__link" target="_blank" rel="noreferrer" href="https://monzo.me/szilviahorvath?h=SnZJTP">monzo link</a> to Szilvi's account where we'll have a pot set aside, if you'd like to do this.
                </p>
            </details>

            <details>
                <summary>
                    <h3 className="question">Order of the day</h3>
                </summary>
                <p>The reception will start from 3.30pm, with Szilvi and Liam arriving shortly after this time. The venue closes at 11pm.</p>
                <p>It is recommended to book taxis in advance as Barnsley can get pretty busy on a Saturday night. </p>
            </details>

            <details>
                <summary>
                <h3 className="question">Will there be food?</h3>
                </summary>
                <p>There will be a hot buffet provided which will include a number of vegan options. Let us know of any dietary requirements in your RSVP.</p>
            </details>

            <details>
                <summary>
                <h3 className="question">Will there be an open bar?</h3>
                </summary>
                <p>There will be a limited amount of beer, wine and soft drinks provided, and once we run out of those you'll be able to buy drinks at the bar.</p>
            </details>

            <details>
                <summary>
                <h3 className="question">Can I take photos?</h3>
                </summary>
                <p>Yes of course, just make sure we look good ;) and please share with us after the day</p>
            </details>

            <details>
                <summary>
                    <h3 className="question">Closest airports</h3>
                </summary>
                <p>Manchester Airport(MAN) is the closest major airport and is around an hour and 30 minutes drive from Barnsley or a couple of hours by train.</p>
                <p>There is also the smaller Leeds Bradford Airport(LBA) which is around 1 hour drive from Barnsley or 1 hour 40 minutes by train, although flights here are more limited.</p>
            </details>

            <details>
                <summary>
                    <h3 className="question">Taxis</h3>  
                </summary>
                <p>Taxis can be prebooked via Veezu <a className="faq__link" href="https://www.veezu.co.uk/barnsley">online</a> or by phone: 01226 244 444. There's also Uber available in Barnsley.</p>
            </details>

            <details>
                <summary>
                    <h3 className="question">Accommodation recommendations</h3>
                </summary>
                <p>
                    There are a number of private accommodations on <a href="https://www.airbnb.co.uk/s/Mapplewell--UK/homes?tab_id=home_tab&refinement_paths%5B%5D=%2Fhomes&flexible_trip_lengths%5B%5D=one_week&monthly_start_date=2024-12-01&monthly_length=3&monthly_end_date=2025-03-01&price_filter_input_type=0&channel=EXPLORE&query=Mapplewell&place_id=ChIJZ1IXUoxkeUgRsm2RzuvEY5k&location_bb=QlZpqL%2B9WVxCVk0iv8KEiA%3D%3D&date_picker_type=calendar&checkin=2025-03-14&checkout=2025-03-16&source=structured_search_input_header&search_type=autocomplete_click" className="faq__link">AirBnB</a> and on <a className="faq__link" href="https://www.booking.com/searchresults.en-gb.html?ss=Mapplewell&efdco=1&label=gen173nr-1BCAEoggI46AdIM1gEaFCIAQGYAQm4AQfIAQzYAQHoAQGIAgGoAgO4ApuCh7oGwAIB0gIkNDJkMDUzMjAtNDBlNS00OWIyLWE1MDgtOWM3YmRiYmQwNThk2AIF4AIB&sid=5789e052c6deaae7fd1871476e736110&aid=304142&lang=en-gb&sb=1&src_elem=sb&src=index&dest_id=826jx7ps-945abdc175e70cabac7024968b1a0ca2-en&dest_type=latlong&place_id=826jx7ps-945abdc175e70cabac7024968b1a0ca2-en&latitude=53.5829222&longitude=-1.5075925&ac_position=0&ac_click_type=b&ac_langcode=en&ac_suggestion_list_length=5&search_selected=true&search_pageview_id=7ed9530d663d0cec&ac_meta=IAAoBDICZW5aEXBvaW50X29mX2ludGVyZXN0&checkin=2025-03-14&checkout=2025-03-16&group_adults=2&no_rooms=1&group_children=0">Booking.com</a> near Mapplewell, Barnsley. Or alternatively, have a look at some of the hotels below.
                </p>
                <ul>
                    <li><a className="faq__link" href="https://all.accor.com/ssr/app/ibis/rates/9554/index.en.shtml">Ibis Styles Barnsley</a> is just off the M1 J37. It's 10 minutes drive from The Loft, 10 minutes drive from Barnsley Train Station, and half an hour drive either way to Leeds or Sheffield.</li>
                    <li><a className="faq__link" href="https://www.ihg.com/holidayinn/hotels/gb/en/barnsley/szdbr/hoteldetail">Holiday Inn Barnsley</a> is just off the M1 J37, very close to Ibis Styles. It's 10 minutes drive from The Loft, 10 minutes drive from Barnsley Train Station, and half an hour drive either way to Leeds or Sheffield.</li>
                    <li><a className="faq__link" href="https://www.premierinn.com/gb/en/hotels/england/south-yorkshire/barnsley/barnsley-central-m1-j37.html?cid=GLBC_BARTAB">Premier Inn Barnsley Central</a> is in the centre of Barnsley. It's 10 minutes drive from The Loft, 10 minutes walk from Barnsley Train Station.</li>
                    <li><a className="faq__link" href="https://all.accor.com/hotel/B4Y6/index.en.shtml">Mercure Barnsley Tankersley Manor Hotel</a> is one minute from Junction 36 off the M1. It's about 20 minutes from The Loft by car.</li>
                    <li><a className="faq__link" href="https://www.hotelstpierre.co.uk/">Hotel St Pierre</a> in the village of Newmillerdam, in Wakefield, one of our favourite places to go on walks with Archie! The hotel is easily accessible from the M1 and the M62. It's 6 minutes from The Loft by car.</li>
                </ul>
            </details>

            <details>
                <summary>
                <h3 className="question">What activities or attractions are there nearby?</h3>
                </summary>
                <p>If you're coming from further afield and want to make a little holiday of your stay in Barnsley, here are some of our favourite places in the area:</p>
                <ul>
                    <li><a className="faq__link" href="https://www.cannon-hall.com/">Cannon Hall</a>, a stately home and museum set in parkland.</li>
                    <li><a className="faq__link" href="https://ysp.org.uk/">The Yorkshire Sculpture Park</a> is an art gallery, with both open-air and indoor exhibition spaces.</li>
                    <li>The <a className="faq__link" href="https://www.ncm.org.uk/">National Coal Mining Museum</a> offers a chance to learn about industry heritage 140 metres underground in a historic mine.</li>
                    <li><a className="faq__link" href="https://www.elsecar-heritage.com/">Elsecar Heritage Centre</a>, a visitor attraction centre in Elsecar, Barnsley. It has independent shops, studios, galleries and cafes in former Victorian engineering workshops. It also has a large antiques centre.</li>
                    <li><a className="faq__link" href="https://www.nationaltrust.org.uk/visit/yorkshire/wentworth-castle-gardens">Wentworth Castle Gardens</a>, 60 acres of gardens reflecting varied planting styles, park and woodland around grand stately home.</li>
                    <li>Barnsley is halfway between Sheffield and Leeds, both just half an hour drive away and with plenty to do and see. Let us know if you'd like some recommendations for either!</li>
                </ul>
            </details>
        </div>
    )
}

export { Faq }
