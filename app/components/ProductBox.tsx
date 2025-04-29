import classes from "./ProductBox.module.scss";

type ProductBoxProps = {
  url: string;
  label: string;
  img: string;
};

export const ProductBox = (props: ProductBoxProps) => {
  const { url, label, img } = props;

  return (
    <a className={classes.ProductBox} href={url}>
      <div
        style={{
          backgroundImage: `url('${img}')`,
        }}
      >
        <div>
          <h1>{label}</h1>
        </div>
      </div>
    </a>
  );
};
