export default function App() {
  const topMetrics = [
    { value: '51–146', label: 'Клиентов к декабрю' },
    { value: '1,7–5,5 млн ₽', label: 'Выручка за год' },
    { value: 'Июл — Окт', label: 'Безубыточность' },
    { value: '1,5 млн ₽', label: 'Раунд инвестиций' },
    { value: '3', label: 'Сценария развития' },
  ];

  const scenarios = [
    {
      name: 'Негативный сценарий',
      short: 'Медленный рост',
      clients: '51 клиент',
      revenue: '1,7 млн ₽',
      monthly: '276 тыс. ₽',
      breakeven: 'Декабрь 2026',
      featured: false,
    },
    {
      name: 'Консервативный сценарий',
      short: 'Основной',
      clients: '90 клиентов',
      revenue: '3,558 млн ₽',
      monthly: '635 тыс. ₽',
      breakeven: 'Июль 2026',
      featured: true,
    },
    {
      name: 'Позитивный сценарий',
      short: 'Быстрый рост',
      clients: '146 клиентов',
      revenue: '5,5 млн ₽',
      monthly: '1,02 млн ₽',
      breakeven: 'Октябрь 2026',
      featured: false,
    },
  ];

  const audience = ['Видеопродакшн', 'Студии графики', 'Кинопродакшн', 'Ивент-агентства', 'BTL', 'Digital'];

  const horizon = [
    { year: '2026', revenue: 4.5, costs: 5.3, profit: -0.8 },
    { year: '2027', revenue: 16, costs: 10, profit: 6 },
    { year: '2028', revenue: 35, costs: 20, profit: 15 },
  ];

  const reportBlocks = [
    {
      title: 'Формат взаимодействия',
      points: [
        'Ежемесячный короткий отчёт по проекту: выручка, расходы, остаток денег, ключевые события, статус продукта и продаж.',
        'Квартальный созвон по стратегии: что сработало, что не сработало, какие следующие гипотезы и приоритеты.',
        'Операционное управление остаётся за основателем и командой проекта без микроменеджмента со стороны инвестора.',
      ],
    },
    {
      title: 'Финансовый учёт и прозрачность',
      points: [
        'Финансовый учёт и бухгалтерию ведёт Надежда в рамках функции холдинга.',
        'Инвестор получает регулярную понятную отчётность, но без режима согласования каждой транзакции и без права тормозить операционную работу проекта.',
        'Основатель распоряжается бюджетом по своему усмотрению в рамках целей проекта, включая премии команде за важные вехи после инвестиций.',
      ],
    },
  ];

  const monthlyReport = {
    message: `СнупДок · отчёт инвестору · Июль 2026

Ключевые показатели
🟡 Выручка: 420 тыс. ₽
🟢 Расходы: 390 тыс. ₽
🟢 Остаток денег: 890 тыс. ₽
🟡 Платящие клиенты: 4

Основные события и прогноз
🟢 Доделали внешний онбординг и шаблоны договоров.
🟡 Один клиент перешёл из пилота в оплату, ещё два близки к запуску.
🟢 Прогноз на следующий месяц — выйти на 5 платящих клиентов и закрыть вторую веху по продукту.

Фокус на следующий месяц
🔵 Добить коробочную версию.
🔵 Закрыть 5 платящих клиентов.
🔵 Протестировать первый заход в смежный сегмент.`,
  };

  return (
    <div className="min-h-screen bg-[#f3f5f8] text-[#101828]">
      <section className="px-6 pt-10 md:px-10 md:pt-12">
        <div className="mx-auto max-w-7xl text-center">
          <div className="mb-5 inline-flex rounded-full border border-red-200 bg-red-50 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.12em] text-red-600">
            Инвестпредложение · СнупДок
          </div>
          <h1 className="text-5xl font-semibold tracking-tight text-[#4b6fff] md:text-7xl">
            Бизнес-план СнупДок
          </h1>
          <p className="mt-5 text-xl text-[#667085] md:text-2xl">
            Март — Декабрь 2026 · Россия · SaaS-подписка + ПЭП по транзакции
          </p>
        </div>
      </section>

      <section className="px-6 py-10 md:px-10">
        <div className="mx-auto grid max-w-7xl gap-4 md:grid-cols-5">
          {topMetrics.map((item) => (
            <div key={item.label} className="rounded-[28px] border border-[#d8dee8] bg-[#f7f8fa] p-7 text-center shadow-[0_2px_8px_rgba(16,24,40,0.03)]">
              <div className="text-4xl font-semibold tracking-tight text-[#2f76ff]">{item.value}</div>
              <div className="mt-3 text-lg text-[#667085]">{item.label}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="px-6 pb-8 md:px-10">
        <div className="mx-auto max-w-7xl">
          <h2 className="text-4xl font-semibold tracking-tight text-[#101828] md:text-5xl">1. Резюме</h2>
          <div className="mt-10 grid items-center gap-10 lg:grid-cols-[0.95fr_1.05fr]">
            <div>
              <div className="leading-none">
                <span className="text-6xl font-bold tracking-tight text-[#2f76ff] md:text-7xl">Снуп</span>
                <span className="text-6xl font-bold tracking-tight text-[#101828] md:text-7xl">Док</span>
              </div>
              <p className="mt-8 max-w-2xl text-2xl leading-[1.45] text-[#475467] md:text-[2rem]">
                Быстрый документооборот для контент-продакшна. Формируйте договоры с командой в несколько кликов,
                подписывайте по СМС, храните и систематизируйте — всё в одном сервисе.
              </p>
              <p className="mt-6 text-xl text-[#667085] md:text-2xl">
                Отраслевые шаблоны, подписание на площадке, учёт РИД.
              </p>
              <div className="mt-8 inline-flex items-center gap-2 text-2xl font-medium text-[#2f76ff]">
                snoop-doc.ru <span>→</span>
              </div>
            </div>

            <div className="rounded-[30px] border border-[#d8dee8] bg-[#f7f8fa] p-7 shadow-[0_6px_20px_rgba(16,24,40,0.04)]">
              <div className="mb-5 flex items-center gap-2">
                <span className="h-3.5 w-3.5 rounded-full bg-[#ff5f57]" />
                <span className="h-3.5 w-3.5 rounded-full bg-[#febc2e]" />
                <span className="h-3.5 w-3.5 rounded-full bg-[#28c840]" />
              </div>
              <h3 className="text-[2rem] font-semibold tracking-tight text-[#1d2939] md:text-[2.2rem]">
                Документы — статусы подписания
              </h3>
              <div className="mt-7 space-y-5 border-t border-[#e4e7ec] pt-5 text-[1.65rem] leading-tight md:text-[1.85rem]">
                <div className="flex items-center justify-between gap-4 border-b border-[#eef1f5] pb-4">
                  <div><span className="font-semibold">СЗ Черепицина</span> — Режиссёр</div>
                  <span className="rounded-2xl bg-[#ccefd6] px-4 py-2 text-[1.2rem] font-medium text-[#169c41]">Подписан</span>
                </div>
                <div className="flex items-center justify-between gap-4 border-b border-[#eef1f5] pb-4">
                  <div><span className="font-semibold">ИП Шавкерин</span> — Оператор</div>
                  <span className="rounded-2xl bg-[#f7e9a6] px-4 py-2 text-[1.2rem] font-medium text-[#a87400]">На подписи</span>
                </div>
                <div className="flex items-center justify-between gap-4 border-b border-[#eef1f5] pb-4">
                  <div><span className="font-semibold">ИП Киселев</span> — Колорист</div>
                  <span className="rounded-2xl bg-[#f7e9a6] px-4 py-2 text-[1.2rem] font-medium text-[#a87400]">На подписи</span>
                </div>
                <div className="flex items-center justify-between gap-4 pb-2">
                  <div><span className="font-semibold">СЗ Петров</span> — Звукорежиссёр</div>
                  <span className="rounded-2xl bg-[#ccefd6] px-4 py-2 text-[1.2rem] font-medium text-[#169c41]">Подписан</span>
                </div>
              </div>
              <div className="mt-10 flex items-center justify-center gap-3">
                <span className="h-3.5 w-3.5 rounded-full bg-[#c9ced6]" />
                <span className="h-3.5 w-3.5 rounded-full bg-[#c9ced6]" />
                <span className="h-3.5 w-3.5 rounded-full bg-[#2f76ff]" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 py-10 md:px-10">
        <div className="mx-auto max-w-7xl">
          <div className="text-2xl font-medium text-[#2f76ff]">Финансовая логика</div>
          <h2 className="mt-4 text-5xl font-semibold tracking-tight text-[#0f172a] md:text-6xl">
            Опираемся на консервативный сценарий
          </h2>
          <p className="mt-7 max-w-4xl text-2xl leading-[1.55] text-[#667085] md:text-[2rem]">
            Без агрессивного маркетинга, с ростом через прямые продажи, нетворкинг и первые внедрения.
          </p>

          <div className="mt-12 grid items-end gap-6 lg:grid-cols-[0.78fr_1fr_0.78fr]">
            {scenarios.map((scenario) => (
              <div
                key={scenario.name}
                className={
                  scenario.featured
                    ? 'rounded-[34px] border border-[#d2d9e6] bg-[#eef3fb] p-8 shadow-[0_10px_28px_rgba(16,24,40,0.08)] lg:scale-100'
                    : 'rounded-[30px] border border-[#d9dfe8] bg-[#f7f8fa] p-6 shadow-[0_6px_18px_rgba(16,24,40,0.04)] opacity-95 lg:scale-[0.93]'
                }
              >
                <div className="text-lg font-medium text-[#2f76ff]">{scenario.name}</div>
                <h3 className={scenario.featured ? 'mt-3 text-4xl font-semibold text-[#0f172a]' : 'mt-3 text-3xl font-semibold text-[#0f172a]'}>
                  {scenario.short}
                </h3>
                <div className="mt-6 space-y-4">
                  <div className="rounded-[24px] border border-[#d8dee8] bg-white p-5 shadow-sm">
                    <div className="text-lg text-[#667085]">К декабрю 2026</div>
                    <div className={scenario.featured ? 'mt-2 text-[3rem] font-semibold leading-none text-[#0f172a]' : 'mt-2 text-[2.3rem] font-semibold leading-none text-[#0f172a]'}>{scenario.clients}</div>
                  </div>
                  <div className="rounded-[24px] border border-[#d8dee8] bg-white p-5 shadow-sm">
                    <div className="text-lg text-[#667085]">Выручка за март–декабрь 2026</div>
                    <div className={scenario.featured ? 'mt-2 text-[3rem] font-semibold leading-none text-[#0f172a]' : 'mt-2 text-[2.3rem] font-semibold leading-none text-[#0f172a]'}>{scenario.revenue}</div>
                  </div>
                  <div className="rounded-[24px] border border-[#d8dee8] bg-white p-5 shadow-sm">
                    <div className="text-lg text-[#667085]">Ежемесячная выручка в декабре</div>
                    <div className={scenario.featured ? 'mt-2 text-[3rem] font-semibold leading-none text-[#0f172a]' : 'mt-2 text-[2.3rem] font-semibold leading-none text-[#0f172a]'}>{scenario.monthly}</div>
                  </div>
                  <div className="rounded-[24px] border border-[#d8dee8] bg-white p-5 shadow-sm">
                    <div className="text-lg text-[#667085]">Безубыточность</div>
                    <div className={scenario.featured ? 'mt-2 text-[3rem] font-semibold leading-none text-[#0f172a]' : 'mt-2 text-[2.3rem] font-semibold leading-none text-[#0f172a]'}>{scenario.breakeven}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <p className="mt-8 max-w-6xl text-xl leading-8 text-[#667085]">
            Консервативный сценарий выбран как основной для инвестпредложения. Негативный показывает нижнюю границу риска: даже в нём проект выходит на безубыточность до конца 2026 года. Позитивный показывает верхнюю границу потенциала при выходе на ивенты и другие смежные проектные рынки.
          </p>
        </div>
      </section>

      <section className="px-6 py-10 md:px-10">
        <div className="mx-auto max-w-7xl">
          <div className="text-2xl font-medium text-[#2f76ff]">Перспектива на 3 года</div>
          <h2 className="mt-4 text-5xl font-semibold tracking-tight text-[#0f172a] md:text-6xl">
            Выручка, расходы и прибыль на горизонте трёх лет
          </h2>
          <div className="mt-10 rounded-[32px] border border-[#d8dee8] bg-[#f7f8fa] p-6 md:p-8 shadow-[0_6px_18px_rgba(16,24,40,0.04)]">
            <div className="flex flex-wrap items-center justify-center gap-6 text-[1.35rem] md:text-[1.6rem] text-[#475467]">
              <div className="flex items-center gap-3"><span className="h-8 w-8 rounded-full bg-[#2f76ff]" />Выручка</div>
              <div className="flex items-center gap-3"><span className="h-8 w-8 rounded-full bg-[#f04444]" />Расходы</div>
              <div className="flex items-center gap-3"><span className="h-8 w-8 rounded-full bg-[#2bbf5f]" />Прибыль</div>
            </div>
            <div className="mt-8 grid grid-cols-3 gap-8 items-end px-2 md:px-8">
              {horizon.map((item) => {
                const max = 35;
                const blueH = (item.revenue / max) * 420;
                const redH = (item.costs / max) * 420;
                const greenH = (Math.abs(item.profit) / max) * 420;
                return (
                  <div key={item.year} className="grid grid-cols-3 items-end gap-3 md:gap-4">
                    <div className="flex flex-col items-center justify-end">
                      <div className="mb-2 text-xl font-semibold text-[#344054]">+{item.revenue}</div>
                      <div className="w-full rounded-t-[16px] bg-[#2f76ff]" style={{ height: `${blueH}px`, minHeight: '52px' }} />
                    </div>
                    <div className="flex flex-col items-center justify-end">
                      <div className="mb-2 text-xl font-semibold text-[#344054]">+{item.costs}</div>
                      <div className="w-full rounded-t-[16px] bg-[#f04444]" style={{ height: `${redH}px`, minHeight: '52px' }} />
                    </div>
                    <div className="flex flex-col items-center justify-end">
                      <div className="mb-2 text-xl font-semibold text-[#344054]">{item.profit > 0 ? '+' : ''}{item.profit}</div>
                      {item.profit >= 0 ? (
                        <div className="w-full rounded-t-[16px] bg-[#2bbf5f]" style={{ height: `${greenH}px`, minHeight: '30px' }} />
                      ) : (
                        <>
                          <div className="h-[210px] w-full" />
                          <div className="w-full rounded-b-[16px] bg-[#2bbf5f]" style={{ height: `${greenH}px`, minHeight: '18px' }} />
                        </>
                      )}
                    </div>
                    <div className="col-span-3 mt-4 text-center text-[2rem] font-semibold text-[#344054] md:text-[2.3rem]">{item.year}</div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 py-10 md:px-10">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[1fr_1fr]">
          <div className="rounded-[32px] border border-[#d8dee8] bg-[#f7f8fa] p-8 shadow-[0_6px_18px_rgba(16,24,40,0.04)]">
            <div className="text-2xl font-medium text-[#2f76ff]">Для кого</div>
            <h2 className="mt-4 text-4xl font-semibold tracking-tight text-[#0f172a]">Сначала контент-продакшн, потом смежные рынки</h2>
            <p className="mt-6 text-2xl leading-[1.55] text-[#667085]">
              Первый сегмент — малый видеопродакшн и студии графики. Дальше продукт можно расширять на ивент-агентства и другие проектные агентские бизнесы, где много подрядчиков, подписаний и повторяющегося документооборота.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              {audience.map((item) => (
                <span key={item} className="rounded-full border border-[#cfe0ff] bg-[#eef5ff] px-4 py-2 text-lg text-[#2f76ff]">
                  {item}
                </span>
              ))}
            </div>
          </div>

          <div className="rounded-[32px] border border-[#2f76ff] bg-[#2f76ff] p-8 text-white shadow-[0_14px_36px_rgba(47,118,255,0.22)]">
            <div className="inline-flex rounded-full bg-red-500 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.12em] text-white">
              Инвестпредложение
            </div>
            <h2 className="mt-5 text-4xl font-semibold tracking-tight">1,5 млн ₽ за 10% компании</h2>
            <p className="mt-6 text-2xl leading-[1.55] text-white/85">
              Сделка разбита на два этапа, чтобы снизить риск и для инвестора, и для проекта.
            </p>
            <div className="mt-8 space-y-4">
              <div className="rounded-[24px] border border-white/20 bg-white/10 p-5">
                <div className="text-lg text-white/65">Первый транш</div>
                <div className="mt-2 text-3xl font-semibold">750 000 ₽ за 5%</div>
              </div>
              <div className="rounded-[24px] border border-white/20 bg-white/10 p-5">
                <div className="text-lg text-white/65">Второй транш</div>
                <div className="mt-2 text-3xl font-semibold">750 000 ₽ за ещё 5%</div>
                <p className="mt-3 text-xl leading-8 text-white/80">
                  После того как продукт доведён до внешней версии и появились 5 внешних платящих клиентов.
                </p>
              </div>
            </div>
            <div className="mt-6 rounded-[24px] border border-white/20 bg-white/10 p-5 text-xl leading-8 text-white/90">
              Если второй транш не происходит, у инвестора остаются только первые 5%. Возврат первого платежа не нужен.
            </div>
            <div className="mt-6 rounded-[24px] border border-white/20 bg-white/10 p-5">
              <div className="text-lg text-white/65">Как оформляем долю</div>
              <div className="mt-4 space-y-4 text-xl leading-8 text-white/90">
                <p><span className="font-semibold">Вариант 1.</span> Сразу открываем ООО с долями 90% / 10%, инвестор входит в состав участников в марте. Нужны нотариально заверенные документы, которые отдельно фиксируют: второй транш, конвертацию оставшейся части сделки в долю либо право на возврат / обратный выкуп части доли при невыполнении условий.</p>
                <p><span className="font-semibold">Вариант 2.</span> До июня действует инвестиционное соглашение, а оформление 10% доли происходит в июне, когда основатель приезжает в Россию.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 py-10 md:px-10">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[1fr_1fr]">
          {reportBlocks.map((block) => (
            <div key={block.title} className="rounded-[32px] border border-[#d8dee8] bg-[#f7f8fa] p-8 shadow-[0_6px_18px_rgba(16,24,40,0.04)]">
              <div className="text-2xl font-medium text-[#2f76ff]">{block.title}</div>
              <div className="mt-5 space-y-4 text-2xl leading-[1.55] text-[#667085]">
                {block.points.map((point) => (
                  <p key={point}>{point}</p>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mx-auto mt-8 max-w-7xl rounded-[32px] border border-[#d8dee8] bg-[#f7f8fa] p-8 shadow-[0_6px_18px_rgba(16,24,40,0.04)]">
          <div className="text-2xl font-medium text-[#2f76ff]">Формат ежемесячной отчётности перед инвестором</div>
          <h2 className="mt-4 text-4xl font-semibold tracking-tight text-[#0f172a]">Пример сообщения в Telegram</h2>

          <div className="mt-8 flex justify-center">
            <div className="w-full max-w-3xl rounded-[34px] border border-[#d8dee8] bg-[#e9eef5] p-4 shadow-[0_10px_28px_rgba(16,24,40,0.08)]">
              <div className="rounded-[30px] border border-[#cfd8e3] bg-white shadow-sm overflow-hidden">
                <div className="flex items-center justify-between border-b border-[#e4e7ec] bg-[#f7f8fa] px-5 py-4">
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded-full bg-[#2f76ff] flex items-center justify-center text-white font-semibold">С</div>
                    <div>
                      <div className="text-lg font-semibold text-[#101828]">СнупДок · инвестор</div>
                      <div className="text-sm text-[#667085]">сегодня в 18:42</div>
                    </div>
                  </div>
                  <div className="text-[#98a2b3] text-xl">⋯</div>
                </div>

                <div className="bg-[#d9ecff] p-5 md:p-6">
                  <div className="max-w-[88%] rounded-[24px] rounded-tl-[8px] bg-white px-5 py-4 text-[1.05rem] leading-8 text-[#101828] shadow-sm whitespace-pre-line">
                    {monthlyReport.message}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <p className="mt-6 text-xl leading-8 text-[#667085]">
            Важная оговорка: основатель вправе распределять бюджет в интересах проекта, включая премии команде за достигнутые вехи после привлечения инвестиций. Из первого раунда премии основателю не выплачиваются.
          </p>
        </div>
      </section>
    </div>
  );
}
