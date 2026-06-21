namespace MiragesLeanExamples

/-- Falenty teaching example: a kernel-checked classical De Morgan law. -/
theorem demorgan_and (a b : Prop) : ¬ (a ∧ b) ↔ ¬ a ∨ ¬ b := by
  classical
  constructor
  · intro h
    by_cases ha : a
    · right
      intro hb
      exact h ⟨ha, hb⟩
    · exact Or.inl ha
  · intro h hab
    cases h with
    | inl hna => exact hna hab.left
    | inr hnb => exact hnb hab.right

end MiragesLeanExamples
