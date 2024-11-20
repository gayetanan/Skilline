function Blog({ img }) {
  return (
    <div className="flex mb-8 flex-col md:flex-row">
      <div className="w-full h-50 md:max-w-64 overflow-hidden rounded-xl relative">
        <img src={img} className="block h-full object-cover" />
        <span className="bg-orange-200 px-4 py-1 rounded-full left-4 bottom-4 block absolute z-10 text-sm">
          NEW
        </span>
      </div>

      <div className="p-4">
        <h4 className="font-medium text-lg text-neutral-900 mb-2">
          Class adds $30 million to its balance sheet for a Zoom-friendly edtech
          solution.
        </h4>
        <p className="text-leading-300 ">
          Class, launched less than a year ago by Blackboard co-founder Michael
          Chasen, integrates exclusively...
        </p>
      </div>
    </div>
  );
}

export default Blog;
