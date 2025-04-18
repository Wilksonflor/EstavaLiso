import React from "react";
import { View, Text, StyleSheet, Pressable, Dimensions } from "react-native";
import { Colors } from "@/constants/Colors";
import AntDesign from "@expo/vector-icons/AntDesign";
import Feather from "@expo/vector-icons/Feather";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import { transactions } from "@/data/Transations";

const Home: React.FC = () => {
  const [meta, setMeta] = React.useState(20000);
  const balance = 17100;
  const expense = 1187.4;
  const progress = meta > 0 ? Math.min((balance / meta) * 100, 100) : 0;

  const lastIncome = transactions.find((t) => t.type === "income");
  const lastExpense = transactions.find((t) => t.type === "expense");

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View>
          <Text style={styles.title}>Olá, Bem-vindo</Text>
          <Text style={styles.subtitle}>Bom dia</Text>
        </View>
        <Pressable style={styles.notificationButton}>
          <AntDesign name="bells" size={24} color={Colors.fenceGreen} />
        </Pressable>
      </View>

      <View style={styles.balanceContainer}>
        <View style={styles.contentBalance}>
          <View style={[styles.balanceItem, styles.rightBorder]}>
            <View style={styles.wrapperBalance}>
              <Feather
                name="arrow-up-right"
                size={16}
                color={Colors.fenceGreen}
                style={{ borderWidth: 1, borderRadius: 5, padding: 1 }}
              />
              <Text style={styles.balanceLabel}>Saldo total</Text>
            </View>
            <Text style={styles.balanceValue}>
              R$ {balance.toLocaleString("pt-BR")}
            </Text>
          </View>

          <View style={styles.balanceItem}>
            <View style={styles.wrapperBalance}>
              <Feather
                name="arrow-down-right"
                size={18}
                color={Colors.red}
                style={{ borderWidth: 1, borderRadius: 5, padding: 1 }}
              />
              <Text style={styles.balanceLabel}>Despesas</Text>
            </View>
            <Text style={[styles.balanceValue, { color: Colors.red }]}>
              - R$ {expense.toLocaleString("pt-BR")}
            </Text>
          </View>
        </View>

        <View style={styles.progressBarBackground}>
          <View style={[styles.progressBarFill, { width: `${progress}%` }]} />
        </View>

        <View style={styles.metaInfo}>
          <Text style={styles.metaPercent}>{Math.floor(progress)}%</Text>
          <Text style={styles.metaGoal}>
            Meta: R$ {meta.toLocaleString("pt-BR")}
          </Text>
        </View>

        {progress >= 100 && (
          <View style={styles.metaFeedbackWrapper}>
            <FontAwesome5 name="flag-checkered" size={18} color="green" />
            <Text style={styles.metaFeedbackText}>
              Você atingiu o seu objetivo!
            </Text>
          </View>
        )}
      </View>

      <View style={styles.containerInfo}>
        <View style={styles.goals}>
          <View style={styles.goalsLeft}>
            <View style={styles.circleProgress}>
              <FontAwesome5 name="car" size={32} color={Colors.void} />
            </View>
            <Text style={styles.goalText}>Sua meta</Text>
          </View>

          <View style={styles.goalsRight}>
            {lastIncome && (
              <View style={styles.goalBlock}>
                <FontAwesome6
                  name={lastIncome.icon}
                  size={24}
                  color={Colors.void}
                />
                <View style={styles.goalDetails}>
                  <Text style={{ fontWeight: "bold", marginBlock: 5 }}>
                    Última receita
                  </Text>
                  <Text style={styles.goalLabel}>{lastIncome.category}</Text>
                  <Text style={styles.goalAmount}>
                    R$ {lastIncome.value.toLocaleString("pt-BR")}
                  </Text>
                </View>
              </View>
            )}

            <View style={styles.divider} />
            {lastExpense && (
              <View style={styles.goalBlock}>
                <MaterialCommunityIcons
                  name={lastExpense.icon}
                  size={24}
                  color={Colors.void}
                />
                <View style={styles.goalDetails}>
                  <Text style={{ fontWeight: "bold", marginBlock: 5 }}>
                    Última despesa
                  </Text>
                  <Text style={styles.goalLabel}>{lastExpense.category}</Text>
                  <Text style={styles.goalAmountNegative}>
                    -R$ {lastExpense.value.toLocaleString("pt-BR")}
                  </Text>
                </View>
              </View>
            )}
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.carabianGreen,
    paddingTop: 60,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 30,
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 22,
    fontFamily: "Poppins_600SemiBold",
    color: Colors.void,
  },
  subtitle: {
    fontSize: 14,
    fontFamily: "Poppins_400Regular",
    color: "#e6fff2",
  },
  notificationButton: {
    backgroundColor: "#fff",
    borderRadius: 50,
    padding: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  balanceContainer: {
    borderRadius: 20,
    padding: 20,
  },
  contentBalance: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10,
  },
  balanceItem: {
    width: "48%",
    paddingHorizontal: 8,
  },
  rightBorder: {
    borderRightWidth: 2,
    borderRightColor: Colors.void,
  },
  wrapperBalance: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
    marginBottom: 4,
  },
  balanceLabel: {
    fontSize: 18,
    color: Colors.fenceGreen,
    fontFamily: "Poppins_500Medium",
  },
  balanceValue: {
    fontSize: 24,
    fontFamily: "Poppins_600SemiBold",
    color: Colors.fenceGreen,
    fontWeight: "bold",
    textAlign: "justify",
  },
  progressBarBackground: {
    marginTop: 16,
    height: 14,
    backgroundColor: "#DFF7E2",
    borderRadius: 10,
    overflow: "hidden",
  },
  progressBarFill: {
    height: "100%",
    backgroundColor: Colors.void,
    borderRadius: 10,
  },
  metaInfo: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 8,
  },
  metaPercent: {
    fontSize: 12,
    color: Colors.fenceGreen,
    fontFamily: "Poppins_500Medium",
  },
  metaGoal: {
    fontSize: 12,
    color: Colors.fenceGreen,
    fontFamily: "Poppins_500Medium",
  },
  metaFeedbackWrapper: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 6,
    marginTop: 10,
  },
  metaFeedbackText: {
    fontSize: 14,
    color: Colors.fenceGreen,
    fontFamily: "Poppins_400Regular",
  },
  containerInfo: {
    backgroundColor: "#fff",
    flex: 2,
    borderTopRightRadius: 18,
    borderTopLeftRadius: 18,
    alignItems: "center",
    paddingVertical: 20,
  },
  goals: {
    width: "90%",
    height: 220,
    borderRadius: 31,
    backgroundColor: Colors.carabianGreen,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  goalsLeft: {
    alignItems: "center",
    borderRightWidth: 2,
    borderColor: "#fff",
    paddingRight: 50,
  },
  circleProgress: {
    width: 80,
    height: 80,
    borderRadius: 40,
    borderWidth: 6,
    borderColor: Colors.void,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 10,
  },
  goalText: {
    fontSize: 14,
    fontFamily: "Poppins_600SemiBold",
    textAlign: "center",
    color: Colors.void,
  },
  goalsRight: {
    justifyContent: "space-evenly",
    height: "70%",
  },
  goalBlock: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  goalDetails: {
    justifyContent: "center",
    flexDirection: "column",
  },
  goalLabel: {
    fontSize: 14,
    fontFamily: "Poppins_500Medium",
    color: Colors.void,
    textAlign: "center",
    marginBottom: 3,
  },
  goalAmount: {
    fontSize: 18,
    fontFamily: "Poppins_700Bold",
    color: Colors.void,
    fontWeight: "bold",
  },
  goalAmountNegative: {
    fontSize: 18,
    fontFamily: "Poppins_700Bold",
    color: Colors.red,
    fontWeight: "bold",
  },
  divider: {
    height: 1.5,
    backgroundColor: "white",
    width: "100%",
    marginVertical: 10,
  },
  dividerVertical: {
    height: 200,
    backgroundColor: "white",
    // width: "100%",
    marginVertical: 10,
  },
});

export default Home;
