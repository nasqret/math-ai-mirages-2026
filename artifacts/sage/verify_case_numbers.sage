from pathlib import Path
import json

from sage.all import QQ
import matplotlib.pyplot as plt


ROOT = Path(__file__).resolve().parents[2]
OUT = ROOT / "outputs" / "assets"
OUT.mkdir(parents=True, exist_ok=True)


def log_chern(n, t2, t3, t4):
    c1 = -2*n + 2*t2 + 5*t3 + 8*t4
    c2 = 24 - 2*n + t2 + 2*t3 + 3*t4
    if c2 <= 0:
        raise ValueError("log-c2 must be positive")
    return c1, c2, QQ(c1) / QQ(c2)


# Exact characteristic-zero VENIANI-64 subconfiguration from the project audit.
n, t2, t3, t4 = 24, 0, 32, 0
c1, c2, slope = log_chern(n, t2, t3, t4)
G = 10*n - 2*t2 - t3
assert (c1, c2, slope, G) == (112, 40, QQ(14)/5, 208)
assert slope > QQ(8)/3

# Promoted ECDSA.fail q1170 record, 2026-06-14 snapshot.
initial_toffoli, initial_qubits = 3_942_753, 2_715
record_toffoli, record_qubits = 1_434_070, 1_170
initial_score = initial_toffoli * initial_qubits
record_score = record_toffoli * record_qubits
assert initial_score == 10_704_574_395
assert record_score == 1_677_861_900
reduction = QQ(initial_score - record_score) / QQ(initial_score)

certificate = {
    "quartic": {
        "surface": "VENIANI-64",
        "profile": [int(n), int(t2), int(t3), int(t4)],
        "c1bar2": int(c1),
        "c2bar": int(c2),
        "slope": str(slope),
        "conjectural_bound": "8/3",
        "G": int(G),
    },
    "ecdsafail": {
        "initial_score": int(initial_score),
        "promoted_score": int(record_score),
        "initial_qubits": int(initial_qubits),
        "promoted_qubits": int(record_qubits),
        "initial_toffoli": int(initial_toffoli),
        "promoted_toffoli": int(record_toffoli),
        "fractional_reduction": str(reduction),
    },
}
(OUT / "case-number-certificate.json").write_text(
    json.dumps(certificate, indent=2) + "\n", encoding="utf-8"
)


COLORS = {"navy": "#061B35", "cyan": "#2DB9DA", "coral": "#FF654F", "yellow": "#FFC84A", "cream": "#F6EBCE"}


def style_axes(ax):
    ax.set_facecolor(COLORS["cream"])
    ax.grid(axis="y", alpha=0.18, color=COLORS["navy"])
    for side in ("top", "right"):
        ax.spines[side].set_visible(False)
    ax.spines["left"].set_color(COLORS["navy"])
    ax.spines["bottom"].set_color(COLORS["navy"])
    ax.tick_params(colors=COLORS["navy"])


fig, ax = plt.subplots(figsize=(9.6, 5.4), dpi=180)
fig.patch.set_facecolor(COLORS["cream"])
style_axes(ax)
labels = ["Conjectural bound", "VENIANI-64"]
values = [float(QQ(8)/3), float(QQ(14)/5)]
bars = ax.bar(labels, values, color=[COLORS["yellow"], COLORS["coral"]], width=0.56)
ax.set_ylim(2.55, 2.86)
ax.set_ylabel("log-Chern slope", color=COLORS["navy"], fontsize=13)
ax.set_title("A certified counterexample, not a model score", color=COLORS["navy"], fontsize=17, weight="bold")
for bar, text_value in zip(bars, ["8/3", "14/5"]):
    ax.text(bar.get_x()+bar.get_width()/2, bar.get_height()+0.008, text_value,
            ha="center", va="bottom", color=COLORS["navy"], fontsize=16, weight="bold")
ax.text(1, 2.585, "(n,t₂,t₃,t₄) = (24,0,32,0)\nexact Sage + Magma audit",
        ha="center", color=COLORS["navy"], fontsize=11)
fig.tight_layout()
fig.savefig(OUT / "quartic-slope.png", bbox_inches="tight", facecolor=fig.get_facecolor())
plt.close(fig)


fig, ax = plt.subplots(figsize=(9.6, 5.4), dpi=180)
fig.patch.set_facecolor(COLORS["cream"])
style_axes(ax)
scores = [initial_score / 1e9, record_score / 1e9]
bars = ax.bar(["Initial circuit", "Promoted q1170"], scores,
              color=[COLORS["yellow"], COLORS["cyan"]], width=0.56)
ax.set_ylim(0, 11.6)
ax.set_ylabel("challenge score (billions; lower is better)", color=COLORS["navy"], fontsize=12)
ax.set_title("ECDSA.fail: an audited agentic optimization campaign", color=COLORS["navy"], fontsize=17, weight="bold")
for bar, value in zip(bars, scores):
    ax.text(bar.get_x()+bar.get_width()/2, bar.get_height()+0.22, f"{value:.2f}B",
            ha="center", color=COLORS["navy"], fontsize=15, weight="bold")
ax.text(1, 4.2, f"84.3% lower\n9,024 trusted shots\n0/0/0 failures",
        ha="center", color=COLORS["navy"], fontsize=12, weight="bold")
fig.tight_layout()
fig.savefig(OUT / "ecdsafail-score.png", bbox_inches="tight", facecolor=fig.get_facecolor())
plt.close(fig)

print(json.dumps(certificate, indent=2))
