import React from "react";
import AppBar from "components/AppBar";
import { Paper, Grid, Hidden, Button } from "@material-ui/core";
import Sidebar from "components/SideBar";
import "./style.scss";
import EmptyState from "components/EmptyState";
import { ReactComponent as ErrorIllustration } from "assets/error-occured.svg";
import LoadingState from "components/LoadingState";
import Carousel from "react-elastic-carousel";
import usePlansQuery from "hooks/queries/usePlansQuery";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
import CurrencyInput from "components/Form/CurrencyInput";
import { useFormik } from "formik";
import CreatePlanSchema from "./createplan.schema";
import useCreateInvestmentMutation from "hooks/queries/useCreateInvestmentMutation";
import useMutationNotifications from "hooks/useMutationNotifications";

import { planIconsCategoryMap } from "constants/data";

const PlanIcon = ({ category }) => {
  const PlanIconComponent = planIconsCategoryMap.hasOwnProperty(category)
    ? planIconsCategoryMap[category]
    : null;

  return PlanIconComponent ? <PlanIconComponent /> : null;
};

export default function CreateInvestment({ investmentId }) {
  const { data: plans, isLoading, isError } = usePlansQuery();

  const [doCreateInvestment, investmentCreationState] =
    useCreateInvestmentMutation();
  useMutationNotifications({
    ...investmentCreationState,
    actionType: "create",
    entity: "investment",
    useServerMessage: false,
  });

  const formik = useFormik({
    initialValues: {
      id: null,
      amount: "",
    },
    validationSchema: CreatePlanSchema,
    onSubmit: async (payload) => {
      console.log(payload);
      doCreateInvestment(payload);
    },
  });

  // useEffect(() => {}, []);

  if (isLoading) return <LoadingState />;

  if (isError)
    return (
      <section
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div>
          <EmptyState
            artwork={<ErrorIllustration />}
            message={`Oops! an error occurred trying to fetch investment plans`}
          ></EmptyState>
        </div>
      </section>
    );

  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2, itemsToScroll: 2 },
    { width: 850, itemsToShow: 3 },
    { width: 1150, itemsToShow: 4, itemsToScroll: 2 },
    { width: 1450, itemsToShow: 5 },
    { width: 1750, itemsToShow: 6 },
  ];

  return (
    <div className="createInvestment">
      <Grid item xs={12} container>
        <Hidden xsDown>
          <Grid item sm={2}>
            <Sidebar />
          </Grid>
        </Hidden>

        <Hidden smUp>
          <AppBar />
        </Hidden>

        <Grid className="createInvestmentMain" item sm={10}>
          <div className="createInvestmentWrapper">
            <Paper className="createInvestmentContainer">
              <Hidden xsDown>
                <img src="img/investment-image.svg" className="image" alt="" />
              </Hidden>
              <form onSubmit={formik.handleSubmit} className="form">
                <p className="imgHeader">Select an Investment Plan</p>
                <Carousel
                  easing="cubic-bezier(1,.15,.55,1.54)"
                  tiltEasing="cubic-bezier(0.110, 1, 1.000, 0.210)"
                  transitionMs={700}
                  breakPoints={breakPoints}
                  className="carousel"
                >
                  {plans.map((plan, idx) => {
                    return (
                      <div key={plan._id} className="card">
                        <input
                          className="plans"
                          type="radio"
                          id={`${plan._id}-${idx}`}
                          name="id"
                          onChange={formik.handleChange}
                          value={plan._id}
                        />
                        <label
                          className="planLabel"
                          htmlFor={`${plan._id}-${idx}`}
                        >
                          <PlanIcon
                            category={
                              ["tourism"].includes(plan.category)
                                ? plan.name
                                : plan.category
                            }
                          />

                          <h2 className="card-header">{plan.name}</h2>
                          <p className="card-info">
                            Get {plan.expectedReturn} every month
                          </p>
                        </label>
                        {formik.touched.id && Boolean(formik.errors.id) ? (
                          <div style={{ color: "red", paddingTop: 10 }}>
                            Please select a plan!
                          </div>
                        ) : (
                          ""
                        )}
                      </div>
                    );
                  })}
                </Carousel>

                <div className="makeInvestmentWrapper">
                  <span className="currencyInput">
                    <CurrencyInput
                      label={"Amount"}
                      id={"amount"}
                      value={formik.values.amount}
                      onChange={formik.handleChange}
                      error={
                        formik.touched.amount && Boolean(formik.errors.amount)
                      }
                      helperText={formik.touched.amount && formik.errors.amount}
                    />
                  </span>
                  <span className="arrowForward">
                    <ArrowForwardIcon />
                  </span>
                  <span className="btnWrapper">
                    <Button type="submit" className="makeInvestment">
                      Make Investment
                    </Button>
                  </span>
                </div>
              </form>
            </Paper>
          </div>
        </Grid>
      </Grid>
    </div>
  );
}
