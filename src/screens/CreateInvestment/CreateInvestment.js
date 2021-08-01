import AppBar from "components/AppBar";
import { Paper, Button, Grid, Hidden } from "@material-ui/core";
import BorderSelect from "components/Select";
import CurrencyInput from "components/Form/CurrencyInput";
import Modal from "components/Modal/Modal";
import useModal from "components/Modal/useModal";
import Sidebar from "components/SideBar";
import styles from "./styles";

// const plans = [
//   {
//     id: 1,
//     name: "Artic Berry",
//     description:
//       "Involves building earthen, concrete or tarpaulin ponds, stocking the fingernails or juveniles and feeding the fish till market size.",
//     returns: "Get 10% every month",
//     duration: "6months",
//   },
//   {
//     id: 2,
//     name: "Ressa Project",
//     description: "",
//     returns: "Get 5% every month",
//     duration: "12months",
//   },
//   {
//     id: 3,
//     name: "Poultry Farming",
//     description:
//       "With over 160 Million consumers in the country who buys poultry products on daily basis, the market is always here waiting to be tapped.",
//     returns: "Get 8% every month",
//     duration: "6months",
//   },
//   {
//     id: 4,
//     name: "Milk Factory",
//     description:
//       "Nigeria’s annual milk production is estimated at 500,000 tonnes while the annual local demand for milk stands at an average of 1.7m tonnes, with the shortfall imported into the country.",
//     returns: "Get 12% every month",
//     duration: "3months",
//   },
// ];

export default function CreateInvestment() {
  const classes = styles();
  const { isShowing, toggle } = useModal();

  return (
    <div className={classes.root}>
      <Grid container>
        <Hidden xsDown>
          <Grid item xs={12} sm={2} className={classes.sideBar}>
            <Sidebar />
          </Grid>
        </Hidden>

        <Hidden smUp>
          <AppBar />
        </Hidden>

        <Grid item xs={12} sm={10}>
          <section className={classes.card}>
            <Paper className={classes.container}>
              <Hidden xsDown>
                <img src="img/invest.jpg" className={classes.image} alt="" />
              </Hidden>
              <span className={classes.main}>
                <BorderSelect />
                {/* <div>
                  {plans.map((plan) => (
                    <Button key={plan.id} style={{ border: "none" }}>
                      <Card>
                        <CardContent>
                          <h3>{plan.name}</h3>
                          <Typography></Typography>
                        </CardContent>
                      </Card>
                    </Button>
                  ))}
                </div> */}

                <CurrencyInput />
                <div className={classes.btnWrapper}>
                  <Button onClick={toggle} className={classes.nextBtn}>
                    Next
                  </Button>
                  <Modal isShowing={isShowing} hide={toggle} />
                </div>
              </span>
            </Paper>
          </section>
        </Grid>
      </Grid>
    </div>
  );
}
