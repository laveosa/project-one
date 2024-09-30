function GridItem({ className, children }) {
  return (
    <div
      className={`flex h-[50px] cursor-pointer items-center justify-between border-b border-black/[8%] px-8 text-[14px] ${className}`}
    >
      <span>{children}</span>
      <button>❌</button>
    </div>
  );
}

export default GridItem;
