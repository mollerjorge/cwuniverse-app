import React from 'react'
import PostLayout from 'components/PostLayout'
import usePost from 'utils/usePost'
import { faCheck, faTimes } from '@fortawesome/pro-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Post = () => {
  const post = usePost()
  return (
    <PostLayout meta={post}>
      <p className="mb-10">
        As a founder, it is important to think about your investor relations strategy holistically.
        Take a step back from the individual updates, and consider how you can maximize both your
        effectiveness as a communicator and the value-add to your business over time. Before setting
        out to write your next investor letter, pause to consider some key opportunities and common
        pitfalls of these communications. If you approach your investor reporting with an awareness
        of the broader strategy and purpose behind these touchpoints, you will be able to maintain
        better investor relationships and truly capitalize on the resources your investors can
        offer.
      </p>
      <h2 className="font-raleway tracking-widest mb-8 uppercase antialised font-bold">
        CADENCE AND CONSISTENCY
      </h2>

      <div className="flex">
        <FontAwesomeIcon icon={faCheck} className="text-teal text-2xl mr-5" />
        <p className="mb-10">
          <b>DO</b> communicate regularly, and frequently. Send a formal update letter at least
          quarterly to your investor base. You can supplement these comprehensive reports with
          additional brief, informal updates as needed. If your company sends out a press release,
          forward that on to keep your investors in the loop. For major developments such as client
          wins or senior team additions, send out a short announcement celebrating the achievement.
          Informal notes don’t need to be overly detailed – you can follow up with more information
          in your quarterly update – but investors will appreciate being informed of key ups and
          downs as they happen.
        </p>
      </div>
      <div className="flex">
        <FontAwesomeIcon icon={faTimes} className="text-red text-2xl mr-5" />
        <p className="mb-10">
          <b>DON&apos;T</b> keep investors guessing. Once you have settled on a reporting strategy,
          let your investors know when they can expect to hear from you. This will help you stay
          accountable to your planned timing, and prevent any confusion or inbound inquiries about
          your plans to share information.
        </p>
      </div>
      <div className="flex">
        <FontAwesomeIcon icon={faTimes} className="text-red text-2xl mr-5" />
        <p className="mb-10">
          <b>DON&apos;T</b> assume that investors will not be paying attention to your consistency
          and ability to follow through on the reporting timeline. Occasionally, it may make more
          sense to delay a particular letter by a few weeks to be able to capture some key news. In
          these circumstances, send a quick informal note announcing the reason for the delay. Your
          investors will appreciate the respectful gesture.
        </p>
      </div>

      <div className="p-6">
        <img className="w-full" src="/images/striking-the-balance-investor-communications-dos-and-donts/watch.jpg" alt="watch" width={611} height={407} />
      </div>

      <h2 className="font-raleway tracking-widest mb-8 uppercase antialised font-bold">
        Letter Structure
      </h2>

      <div className="flex">
        <FontAwesomeIcon icon={faCheck} className="text-teal text-2xl mr-5" />
        <p className="mb-10">
          <b>DO</b> set an update structure and stick to it. Break your letter into sub-sections
          covering business domains like “Product,” “Sales & Marketing,” “Financial Metrics,”
          “Fundraising,” etc. and use these categories across updates. These section headers will
          help you break down your content into digestible pieces for your readers, and staying
          consistent will make it easier for your investors to follow particular narratives over
          time. Further, once you develop a template that fits your business, you’ll find you are
          able to construct updates more quickly going forward.
        </p>
      </div>
      <div className="flex">
        <FontAwesomeIcon icon={faTimes} className="text-red text-2xl mr-5" />
        <p className="mb-10">
          <b>DON&apos;T</b> send updates with lengthy blocks of text. TL:DR is also real with
          investor updates, and while some investors will spend the time and detail to trudge
          through a wordy email or lengthy PDF attachment, many will not, and/or they will miss the
          key takeaways you are looking to present. While you as the founder undoubtedly carry deep
          knowledge of all aspects of your business, you do not need to provide every granular
          detail to investors. Keep each section concise. Break up the text whenever possible with
          images, graphs, tables, or other media which can convey the message with greater impact.
          Remember that investors may be receiving updates from numerous founders with whom they
          have invested. Often, your reader will be on the go, reading from their phone. Make your
          updates readable, impactful, and accessible, so that the investor comes away with a clear
          idea of where the company stands.
        </p>
      </div>
      <div className="p-6">
        <img className="w-full" src="/images/striking-the-balance-investor-communications-dos-and-donts/white-bg.jpg" alt="watch" width={611} height={407} />
      </div>

      <h2 className="font-raleway tracking-widest mb-8 uppercase antialised font-bold">Asks</h2>

      <div className="flex">
        <FontAwesomeIcon icon={faCheck} className="text-teal text-2xl mr-5" />
        <p className="mb-10">
          <b>DO</b> be explicit and emphatic with investor asks. Your investor base can act as a
          major resource, providing access to networks, strategic guidance, feedback, and more. When
          crafting an update, think about your company’s unique needs and how investors can best
          contribute. Highlight those asks in a clear and prominent position in your letter, and be
          sure to provide all relevant information and instruction about the type of help desired.
        </p>
      </div>
      <div className="flex">
        <FontAwesomeIcon icon={faTimes} className="text-red text-2xl mr-5" />
        <p className="mb-10">
          <b>DON&apos;T</b> be afraid to make requests. Investors want to see your business succeed,
          and many have cultivated extensive networks and industry knowledge (and of course, more
          capital to potentially invest in you). Some may have built and sold successful businesses,
          which may have endured similar challenges to those you are facing. Even if investors are
          not able to help with a particular ask, it is still worth putting the request out and
          keeping investors aware of the company’s needs. Other examples include target hiring
          additions – while a given investor may not directly know the proper candidate, they may
          have someone to refer who can in turn lead you closer to the key hire.
        </p>
      </div>
      <div className="p-6">
        <img className="w-full" src="/images/striking-the-balance-investor-communications-dos-and-donts/canoe.jpg" alt="watch" width={611} height={407} />
      </div>

      <h2 className="font-raleway tracking-widest mb-8 uppercase antialised font-bold">
        Information Management
      </h2>

      <div className="flex">
        <FontAwesomeIcon icon={faCheck} className="text-teal text-2xl mr-5" />
        <p className="mb-10">
          <b>DO</b> keep files, data, and materials organized on an ongoing basis. Your investor
          relations strategy will be far simpler to execute if you are keeping the information you
          need ready on hand throughout the reporting period. Whenever possible, use systems and
          processes to track your business without significant manual effort. As you scale, systems
          like these will become increasingly necessary to clearly understand the health of the
          business on an ongoing basis. As with the above, such organizational efforts will also
          make your life easier when it comes time to craft these investor letters.
        </p>
      </div>
      <div className="flex">
        <FontAwesomeIcon icon={faTimes} className="text-red text-2xl mr-5" />
        <p className="mb-10">
          <b>DON&apos;T</b> wait until you are drafting an update to think about the documentation
          and metrics you will need. Your information management strategies should serve as a
          foundational element of your overall investor relations strategy and planning. Diligence
          in gathering and organizing this information will put you in a better position to create
          investor materials the next time you set out to fundraise.
        </p>
      </div>
      <div className="p-6">
        <img className="w-full" src="/images/striking-the-balance-investor-communications-dos-and-donts/notebook.jpg" alt="watch" width={611} height={407} />
      </div>

      <h2 className="font-raleway tracking-widest mb-8 uppercase antialised font-bold">
        Follow ups
      </h2>

      <div className="flex">
        <FontAwesomeIcon icon={faCheck} className="text-teal text-2xl mr-5" />
        <p className="mb-10">
          <b>DO</b> be responsive to your investors. When you send out an investor update, encourage
          your recipients to reach out with further questions and comments. Be prompt with your
          responses so that you can keep engagement levels high.
        </p>
      </div>
      <div className="flex">
        <FontAwesomeIcon icon={faTimes} className="text-red text-2xl mr-5" />
        <p className="mb-10">
          <b>DON&apos;T</b> forget to clearly explain how your investors can reach you. Indicate the
          best ways to contact you and provide that information in the body of your investor
          letters. Express openness to hearing from your investors. And, where appropriate, extend
          an openness to chat further over a call or in-person meeting.
        </p>
      </div>
      <div className="p-6">
        <img className="w-full" src="/images/striking-the-balance-investor-communications-dos-and-donts/coffe-shop.jpg" alt="watch" width={611} height={407} />
      </div>
    </PostLayout>
  )
}

export default Post
